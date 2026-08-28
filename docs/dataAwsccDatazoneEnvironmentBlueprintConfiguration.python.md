# `dataAwsccDatazoneEnvironmentBlueprintConfiguration` Submodule <a name="`dataAwsccDatazoneEnvironmentBlueprintConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneEnvironmentBlueprintConfiguration <a name="DataAwsccDatazoneEnvironmentBlueprintConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datazone_environment_blueprint_configuration awscc_datazone_environment_blueprint_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datazone_environment_blueprint_configuration#id DataAwsccDatazoneEnvironmentBlueprintConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatazoneEnvironmentBlueprintConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatazoneEnvironmentBlueprintConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatazoneEnvironmentBlueprintConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneEnvironmentBlueprintConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.enabledRegions">enabled_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId">environment_blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary">environment_role_permission_boundary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.globalParameters">global_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn">manage_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations">provisioning_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.regionalParameters">regional_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `enabled_regions`<sup>Required</sup> <a name="enabled_regions" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.enabledRegions"></a>

```python
enabled_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_blueprint_id`<sup>Required</sup> <a name="environment_blueprint_id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId"></a>

```python
environment_blueprint_id: str
```

- *Type:* str

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdentifier"></a>

```python
environment_blueprint_identifier: str
```

- *Type:* str

---

##### `environment_role_permission_boundary`<sup>Required</sup> <a name="environment_role_permission_boundary" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.environmentRolePermissionBoundary"></a>

```python
environment_role_permission_boundary: str
```

- *Type:* str

---

##### `global_parameters`<sup>Required</sup> <a name="global_parameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.globalParameters"></a>

```python
global_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `manage_access_role_arn`<sup>Required</sup> <a name="manage_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn"></a>

```python
manage_access_role_arn: str
```

- *Type:* str

---

##### `provisioning_configurations`<sup>Required</sup> <a name="provisioning_configurations" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningConfigurations"></a>

```python
provisioning_configurations: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList</a>

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

---

##### `regional_parameters`<sup>Required</sup> <a name="regional_parameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.regionalParameters"></a>

```python
regional_parameters: DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datazone_environment_blueprint_configuration#id DataAwsccDatazoneEnvironmentBlueprintConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations()
```


### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration()
```


### DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations">location_registration_exclude_s3_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole">location_registration_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_registration_exclude_s3_locations`<sup>Required</sup> <a name="location_registration_exclude_s3_locations" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationExcludeS3Locations"></a>

```python
location_registration_exclude_s3_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_registration_role`<sup>Required</sup> <a name="location_registration_role" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.locationRegistrationRole"></a>

```python
location_registration_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfiguration</a>

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration">lake_formation_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lake_formation_configuration`<sup>Required</sup> <a name="lake_formation_configuration" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.lakeFormationConfiguration"></a>

```python
lake_formation_configuration: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsLakeFormationConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations">DataAwsccDatazoneEnvironmentBlueprintConfigurationProvisioningConfigurations</a>

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference <a name="DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_environment_blueprint_configuration

dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.parameters"></a>

```python
parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneEnvironmentBlueprintConfiguration.DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters">DataAwsccDatazoneEnvironmentBlueprintConfigurationRegionalParameters</a>

---



