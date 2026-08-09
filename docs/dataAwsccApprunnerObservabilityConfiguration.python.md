# `dataAwsccApprunnerObservabilityConfiguration` Submodule <a name="`dataAwsccApprunnerObservabilityConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApprunnerObservabilityConfiguration <a name="DataAwsccApprunnerObservabilityConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_observability_configuration awscc_apprunner_observability_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_observability_configuration#id DataAwsccApprunnerObservabilityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApprunnerObservabilityConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApprunnerObservabilityConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApprunnerObservabilityConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_observability_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApprunnerObservabilityConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.latest">latest</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationArn">observability_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationName">observability_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision">observability_configuration_revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList">DataAwsccApprunnerObservabilityConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.traceConfiguration">trace_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference">DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.latest"></a>

```python
latest: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `observability_configuration_arn`<sup>Required</sup> <a name="observability_configuration_arn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationArn"></a>

```python
observability_configuration_arn: str
```

- *Type:* str

---

##### `observability_configuration_name`<sup>Required</sup> <a name="observability_configuration_name" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationName"></a>

```python
observability_configuration_name: str
```

- *Type:* str

---

##### `observability_configuration_revision`<sup>Required</sup> <a name="observability_configuration_revision" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.observabilityConfigurationRevision"></a>

```python
observability_configuration_revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tags"></a>

```python
tags: DataAwsccApprunnerObservabilityConfigurationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList">DataAwsccApprunnerObservabilityConfigurationTagsList</a>

---

##### `trace_configuration`<sup>Required</sup> <a name="trace_configuration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.traceConfiguration"></a>

```python
trace_configuration: DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference">DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApprunnerObservabilityConfigurationConfig <a name="DataAwsccApprunnerObservabilityConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apprunner_observability_configuration#id DataAwsccApprunnerObservabilityConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApprunnerObservabilityConfigurationTags <a name="DataAwsccApprunnerObservabilityConfigurationTags" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags()
```


### DataAwsccApprunnerObservabilityConfigurationTraceConfiguration <a name="DataAwsccApprunnerObservabilityConfigurationTraceConfiguration" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApprunnerObservabilityConfigurationTagsList <a name="DataAwsccApprunnerObservabilityConfigurationTagsList" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApprunnerObservabilityConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApprunnerObservabilityConfigurationTagsOutputReference <a name="DataAwsccApprunnerObservabilityConfigurationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags">DataAwsccApprunnerObservabilityConfigurationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApprunnerObservabilityConfigurationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTags">DataAwsccApprunnerObservabilityConfigurationTags</a>

---


### DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference <a name="DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apprunner_observability_configuration

dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration">DataAwsccApprunnerObservabilityConfigurationTraceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApprunnerObservabilityConfigurationTraceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApprunnerObservabilityConfiguration.DataAwsccApprunnerObservabilityConfigurationTraceConfiguration">DataAwsccApprunnerObservabilityConfigurationTraceConfiguration</a>

---



