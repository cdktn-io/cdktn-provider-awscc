# `dataAwsccAppconfigExperimentDefinition` Submodule <a name="`dataAwsccAppconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppconfigExperimentDefinition <a name="DataAwsccAppconfigExperimentDefinition" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appconfig_experiment_definition#id DataAwsccAppconfigExperimentDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccAppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccAppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccAppconfigExperimentDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccAppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceDescription">audience_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceRule">audience_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.configurationProfileIdentifier">configuration_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.control">control</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference">DataAwsccAppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.experimentDefinitionId">experiment_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.flagKey">flag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.hypothesis">hypothesis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.launchCriteria">launch_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList">DataAwsccAppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.treatments">treatments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList">DataAwsccAppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `audience_description`<sup>Required</sup> <a name="audience_description" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceDescription"></a>

```python
audience_description: str
```

- *Type:* str

---

##### `audience_rule`<sup>Required</sup> <a name="audience_rule" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.audienceRule"></a>

```python
audience_rule: str
```

- *Type:* str

---

##### `configuration_profile_identifier`<sup>Required</sup> <a name="configuration_profile_identifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```python
configuration_profile_identifier: str
```

- *Type:* str

---

##### `control`<sup>Required</sup> <a name="control" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.control"></a>

```python
control: DataAwsccAppconfigExperimentDefinitionControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference">DataAwsccAppconfigExperimentDefinitionControlOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `experiment_definition_id`<sup>Required</sup> <a name="experiment_definition_id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```python
experiment_definition_id: str
```

- *Type:* str

---

##### `flag_key`<sup>Required</sup> <a name="flag_key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.flagKey"></a>

```python
flag_key: str
```

- *Type:* str

---

##### `hypothesis`<sup>Required</sup> <a name="hypothesis" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.hypothesis"></a>

```python
hypothesis: str
```

- *Type:* str

---

##### `launch_criteria`<sup>Required</sup> <a name="launch_criteria" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.launchCriteria"></a>

```python
launch_criteria: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tags"></a>

```python
tags: DataAwsccAppconfigExperimentDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList">DataAwsccAppconfigExperimentDefinitionTagsList</a>

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.treatments"></a>

```python
treatments: DataAwsccAppconfigExperimentDefinitionTreatmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList">DataAwsccAppconfigExperimentDefinitionTreatmentsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppconfigExperimentDefinitionConfig <a name="DataAwsccAppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appconfig_experiment_definition#id DataAwsccAppconfigExperimentDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppconfigExperimentDefinitionControl <a name="DataAwsccAppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl()
```


### DataAwsccAppconfigExperimentDefinitionControlAttributeValues <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues()
```


### DataAwsccAppconfigExperimentDefinitionTags <a name="DataAwsccAppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags()
```


### DataAwsccAppconfigExperimentDefinitionTreatments <a name="DataAwsccAppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments()
```


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">boolean_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">number_array</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">string_array</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues">DataAwsccAppconfigExperimentDefinitionControlAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `number_array`<sup>Required</sup> <a name="number_array" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```python
number_array: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_array`<sup>Required</sup> <a name="string_array" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```python
string_array: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppconfigExperimentDefinitionControlAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValues">DataAwsccAppconfigExperimentDefinitionControlAttributeValues</a>

---


### DataAwsccAppconfigExperimentDefinitionControlOutputReference <a name="DataAwsccAppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.attributeValues">attribute_values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl">DataAwsccAppconfigExperimentDefinitionControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_values`<sup>Required</sup> <a name="attribute_values" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```python
attribute_values: DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppconfigExperimentDefinitionControl
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionControl">DataAwsccAppconfigExperimentDefinitionControl</a>

---


### DataAwsccAppconfigExperimentDefinitionTagsList <a name="DataAwsccAppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppconfigExperimentDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppconfigExperimentDefinitionTagsOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags">DataAwsccAppconfigExperimentDefinitionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppconfigExperimentDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTags">DataAwsccAppconfigExperimentDefinitionTags</a>

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">boolean_value</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">number_array</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">number_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">string_array</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boolean_value`<sup>Required</sup> <a name="boolean_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```python
boolean_value: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `number_array`<sup>Required</sup> <a name="number_array" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```python
number_array: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `number_value`<sup>Required</sup> <a name="number_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```python
number_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_array`<sup>Required</sup> <a name="string_array" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```python
string_array: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValues</a>

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsList <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference <a name="DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_appconfig_experiment_definition

dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">attribute_values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments">DataAwsccAppconfigExperimentDefinitionTreatments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_values`<sup>Required</sup> <a name="attribute_values" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```python
attribute_values: DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap">DataAwsccAppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccAppconfigExperimentDefinitionTreatments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppconfigExperimentDefinition.DataAwsccAppconfigExperimentDefinitionTreatments">DataAwsccAppconfigExperimentDefinitionTreatments</a>

---



