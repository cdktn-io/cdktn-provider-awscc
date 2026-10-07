# `dataAwsccApplicationsignalsInstrumentationConfig` Submodule <a name="`dataAwsccApplicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApplicationsignalsInstrumentationConfig <a name="DataAwsccApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#id DataAwsccApplicationsignalsInstrumentationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApplicationsignalsInstrumentationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters">attribute_filters</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration">capture_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt">expires_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType">instrumentation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash">location_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType">signal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attribute_filters`<sup>Required</sup> <a name="attribute_filters" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```python
attribute_filters: StringMapList
```

- *Type:* cdktn.StringMapList

---

##### `capture_configuration`<sup>Required</sup> <a name="capture_configuration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```python
capture_configuration: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `expires_at`<sup>Required</sup> <a name="expires_at" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```python
expires_at: str
```

- *Type:* str

---

##### `instrumentation_type`<sup>Required</sup> <a name="instrumentation_type" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```python
instrumentation_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location"></a>

```python
location: DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `location_hash`<sup>Required</sup> <a name="location_hash" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```python
location_hash: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `signal_type`<sup>Required</sup> <a name="signal_type" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType"></a>

```python
signal_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags"></a>

```python
tags: DataAwsccApplicationsignalsInstrumentationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration()
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture()
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits()
```


### DataAwsccApplicationsignalsInstrumentationConfigConfig <a name="DataAwsccApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#id DataAwsccApplicationsignalsInstrumentationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApplicationsignalsInstrumentationConfigLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation()
```


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation()
```


### DataAwsccApplicationsignalsInstrumentationConfigTags <a name="DataAwsccApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">max_collection_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">max_collection_width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">max_fields_per_object</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">max_hits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">max_object_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">max_stack_frames</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">max_stack_trace_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">max_string_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_collection_depth`<sup>Required</sup> <a name="max_collection_depth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```python
max_collection_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_collection_width`<sup>Required</sup> <a name="max_collection_width" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```python
max_collection_width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_fields_per_object`<sup>Required</sup> <a name="max_fields_per_object" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```python
max_fields_per_object: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_hits`<sup>Required</sup> <a name="max_hits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```python
max_hits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_object_depth`<sup>Required</sup> <a name="max_object_depth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```python
max_object_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_frames`<sup>Required</sup> <a name="max_stack_frames" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```python
max_stack_frames: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_stack_trace_size`<sup>Required</sup> <a name="max_stack_trace_size" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```python
max_stack_trace_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_string_length`<sup>Required</sup> <a name="max_string_length" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```python
max_string_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">capture_arguments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">capture_limits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">capture_locals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">capture_return</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">capture_stack_trace</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_arguments`<sup>Required</sup> <a name="capture_arguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```python
capture_arguments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capture_limits`<sup>Required</sup> <a name="capture_limits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```python
capture_limits: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `capture_locals`<sup>Required</sup> <a name="capture_locals" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```python
capture_locals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capture_return`<sup>Required</sup> <a name="capture_return" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```python
capture_return: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `capture_stack_trace`<sup>Required</sup> <a name="capture_stack_trace" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```python
capture_stack_trace: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">code_capture</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_capture`<sup>Required</sup> <a name="code_capture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```python
code_capture: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">class_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">code_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">line_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">method_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `class_name`<sup>Required</sup> <a name="class_name" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```python
class_name: str
```

- *Type:* str

---

##### `code_unit`<sup>Required</sup> <a name="code_unit" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```python
code_unit: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `line_number`<sup>Required</sup> <a name="line_number" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```python
line_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method_name`<sup>Required</sup> <a name="method_name" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```python
method_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">code_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_location`<sup>Required</sup> <a name="code_location" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```python
code_location: DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApplicationsignalsInstrumentationConfigLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsList <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_applicationsignals_instrumentation_config

dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApplicationsignalsInstrumentationConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a>

---



