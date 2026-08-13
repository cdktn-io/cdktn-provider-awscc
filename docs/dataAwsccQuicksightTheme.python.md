# `dataAwsccQuicksightTheme` Submodule <a name="`dataAwsccQuicksightTheme` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightTheme <a name="DataAwsccQuicksightTheme" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_theme awscc_quicksight_theme}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_theme#id DataAwsccQuicksightTheme#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightTheme resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQuicksightTheme resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQuicksightTheme to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQuicksightTheme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_theme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightTheme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.baseThemeId">base_theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference">DataAwsccQuicksightThemeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList">DataAwsccQuicksightThemePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList">DataAwsccQuicksightThemeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.themeId">theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.version">version</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference">DataAwsccQuicksightThemeVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.baseThemeId"></a>

```python
base_theme_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.configuration"></a>

```python
configuration: DataAwsccQuicksightThemeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference">DataAwsccQuicksightThemeConfigurationOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.permissions"></a>

```python
permissions: DataAwsccQuicksightThemePermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList">DataAwsccQuicksightThemePermissionsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tags"></a>

```python
tags: DataAwsccQuicksightThemeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList">DataAwsccQuicksightThemeTagsList</a>

---

##### `theme_id`<sup>Required</sup> <a name="theme_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.themeId"></a>

```python
theme_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.version"></a>

```python
version: DataAwsccQuicksightThemeVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference">DataAwsccQuicksightThemeVersionOutputReference</a>

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightTheme.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightThemeConfig <a name="DataAwsccQuicksightThemeConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_theme#id DataAwsccQuicksightTheme#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightThemeConfiguration <a name="DataAwsccQuicksightThemeConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration()
```


### DataAwsccQuicksightThemeConfigurationDataColorPalette <a name="DataAwsccQuicksightThemeConfigurationDataColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette()
```


### DataAwsccQuicksightThemeConfigurationSheet <a name="DataAwsccQuicksightThemeConfigurationSheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet()
```


### DataAwsccQuicksightThemeConfigurationSheetTile <a name="DataAwsccQuicksightThemeConfigurationSheetTile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile()
```


### DataAwsccQuicksightThemeConfigurationSheetTileBorder <a name="DataAwsccQuicksightThemeConfigurationSheetTileBorder" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder()
```


### DataAwsccQuicksightThemeConfigurationSheetTileLayout <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout()
```


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter()
```


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin()
```


### DataAwsccQuicksightThemeConfigurationTypography <a name="DataAwsccQuicksightThemeConfigurationTypography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography()
```


### DataAwsccQuicksightThemeConfigurationTypographyFontFamilies <a name="DataAwsccQuicksightThemeConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies()
```


### DataAwsccQuicksightThemeConfigurationUiColorPalette <a name="DataAwsccQuicksightThemeConfigurationUiColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette()
```


### DataAwsccQuicksightThemePermissions <a name="DataAwsccQuicksightThemePermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions()
```


### DataAwsccQuicksightThemeTags <a name="DataAwsccQuicksightThemeTags" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags()
```


### DataAwsccQuicksightThemeVersion <a name="DataAwsccQuicksightThemeVersion" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion()
```


### DataAwsccQuicksightThemeVersionConfiguration <a name="DataAwsccQuicksightThemeVersionConfiguration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration()
```


### DataAwsccQuicksightThemeVersionConfigurationDataColorPalette <a name="DataAwsccQuicksightThemeVersionConfigurationDataColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette()
```


### DataAwsccQuicksightThemeVersionConfigurationSheet <a name="DataAwsccQuicksightThemeVersionConfigurationSheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet()
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTile <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile()
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder()
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout()
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter()
```


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin()
```


### DataAwsccQuicksightThemeVersionConfigurationTypography <a name="DataAwsccQuicksightThemeVersionConfigurationTypography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography()
```


### DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies()
```


### DataAwsccQuicksightThemeVersionConfigurationUiColorPalette <a name="DataAwsccQuicksightThemeVersionConfigurationUiColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette()
```


### DataAwsccQuicksightThemeVersionErrors <a name="DataAwsccQuicksightThemeVersionErrors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference <a name="DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor">empty_fill_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient">min_max_gradient</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette">DataAwsccQuicksightThemeConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.colors"></a>

```python
colors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `empty_fill_color`<sup>Required</sup> <a name="empty_fill_color" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```python
empty_fill_color: str
```

- *Type:* str

---

##### `min_max_gradient`<sup>Required</sup> <a name="min_max_gradient" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```python
min_max_gradient: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPalette">DataAwsccQuicksightThemeConfigurationDataColorPalette</a>

---


### DataAwsccQuicksightThemeConfigurationOutputReference <a name="DataAwsccQuicksightThemeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.dataColorPalette">data_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference">DataAwsccQuicksightThemeConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference">DataAwsccQuicksightThemeConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.uiColorPalette">ui_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration">DataAwsccQuicksightThemeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_color_palette`<sup>Required</sup> <a name="data_color_palette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.dataColorPalette"></a>

```python
data_color_palette: DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.sheet"></a>

```python
sheet: DataAwsccQuicksightThemeConfigurationSheetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference">DataAwsccQuicksightThemeConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.typography"></a>

```python
typography: DataAwsccQuicksightThemeConfigurationTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference">DataAwsccQuicksightThemeConfigurationTypographyOutputReference</a>

---

##### `ui_color_palette`<sup>Required</sup> <a name="ui_color_palette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.uiColorPalette"></a>

```python
ui_color_palette: DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfiguration">DataAwsccQuicksightThemeConfiguration</a>

---


### DataAwsccQuicksightThemeConfigurationSheetOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tileLayout">tile_layout</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet">DataAwsccQuicksightThemeConfigurationSheet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tile"></a>

```python
tile: DataAwsccQuicksightThemeConfigurationSheetTileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileOutputReference</a>

---

##### `tile_layout`<sup>Required</sup> <a name="tile_layout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.tileLayout"></a>

```python
tile_layout: DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationSheet
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheet">DataAwsccQuicksightThemeConfigurationSheet</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder">DataAwsccQuicksightThemeConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorder">DataAwsccQuicksightThemeConfigurationSheetTileBorder</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutter</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMargin</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout">DataAwsccQuicksightThemeConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```python
gutter: DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```python
margin: DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileLayout">DataAwsccQuicksightThemeConfigurationSheetTileLayout</a>

---


### DataAwsccQuicksightThemeConfigurationSheetTileOutputReference <a name="DataAwsccQuicksightThemeConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile">DataAwsccQuicksightThemeConfigurationSheetTile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.border"></a>

```python
border: DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeConfigurationSheetTileBorderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationSheetTile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationSheetTile">DataAwsccQuicksightThemeConfigurationSheetTile</a>

---


### DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList <a name="DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference <a name="DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">font_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_family`<sup>Required</sup> <a name="font_family" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```python
font_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationTypographyFontFamilies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeConfigurationTypographyFontFamilies</a>

---


### DataAwsccQuicksightThemeConfigurationTypographyOutputReference <a name="DataAwsccQuicksightThemeConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies">font_families</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography">DataAwsccQuicksightThemeConfigurationTypography</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_families`<sup>Required</sup> <a name="font_families" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.fontFamilies"></a>

```python
font_families: DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeConfigurationTypographyFontFamiliesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypographyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationTypography">DataAwsccQuicksightThemeConfigurationTypography</a>

---


### DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference <a name="DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground">accent_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground">danger_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimension_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground">measure_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground">primary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground">primary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground">success_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground">warning_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette">DataAwsccQuicksightThemeConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accent"></a>

```python
accent: str
```

- *Type:* str

---

##### `accent_foreground`<sup>Required</sup> <a name="accent_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```python
accent_foreground: str
```

- *Type:* str

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.danger"></a>

```python
danger: str
```

- *Type:* str

---

##### `danger_foreground`<sup>Required</sup> <a name="danger_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```python
danger_foreground: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `dimension_foreground`<sup>Required</sup> <a name="dimension_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```python
dimension_foreground: str
```

- *Type:* str

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measure"></a>

```python
measure: str
```

- *Type:* str

---

##### `measure_foreground`<sup>Required</sup> <a name="measure_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```python
measure_foreground: str
```

- *Type:* str

---

##### `primary_background`<sup>Required</sup> <a name="primary_background" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```python
primary_background: str
```

- *Type:* str

---

##### `primary_foreground`<sup>Required</sup> <a name="primary_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```python
primary_foreground: str
```

- *Type:* str

---

##### `secondary_background`<sup>Required</sup> <a name="secondary_background" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```python
secondary_background: str
```

- *Type:* str

---

##### `secondary_foreground`<sup>Required</sup> <a name="secondary_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```python
secondary_foreground: str
```

- *Type:* str

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.success"></a>

```python
success: str
```

- *Type:* str

---

##### `success_foreground`<sup>Required</sup> <a name="success_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```python
success_foreground: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `warning_foreground`<sup>Required</sup> <a name="warning_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```python
warning_foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeConfigurationUiColorPalette">DataAwsccQuicksightThemeConfigurationUiColorPalette</a>

---


### DataAwsccQuicksightThemePermissionsList <a name="DataAwsccQuicksightThemePermissionsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightThemePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightThemePermissionsOutputReference <a name="DataAwsccQuicksightThemePermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.actions">actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions">DataAwsccQuicksightThemePermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.actions"></a>

```python
actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemePermissions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemePermissions">DataAwsccQuicksightThemePermissions</a>

---


### DataAwsccQuicksightThemeTagsList <a name="DataAwsccQuicksightThemeTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightThemeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightThemeTagsOutputReference <a name="DataAwsccQuicksightThemeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags">DataAwsccQuicksightThemeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeTags">DataAwsccQuicksightThemeTags</a>

---


### DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors">colors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor">empty_fill_color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient">min_max_gradient</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette">DataAwsccQuicksightThemeVersionConfigurationDataColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `colors`<sup>Required</sup> <a name="colors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.colors"></a>

```python
colors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `empty_fill_color`<sup>Required</sup> <a name="empty_fill_color" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.emptyFillColor"></a>

```python
empty_fill_color: str
```

- *Type:* str

---

##### `min_max_gradient`<sup>Required</sup> <a name="min_max_gradient" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.minMaxGradient"></a>

```python
min_max_gradient: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationDataColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPalette">DataAwsccQuicksightThemeVersionConfigurationDataColorPalette</a>

---


### DataAwsccQuicksightThemeVersionConfigurationOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette">data_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.sheet">sheet</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.typography">typography</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference">DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette">ui_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration">DataAwsccQuicksightThemeVersionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_color_palette`<sup>Required</sup> <a name="data_color_palette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.dataColorPalette"></a>

```python
data_color_palette: DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationDataColorPaletteOutputReference</a>

---

##### `sheet`<sup>Required</sup> <a name="sheet" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.sheet"></a>

```python
sheet: DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference</a>

---

##### `typography`<sup>Required</sup> <a name="typography" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.typography"></a>

```python
typography: DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference">DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference</a>

---

##### `ui_color_palette`<sup>Required</sup> <a name="ui_color_palette" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.uiColorPalette"></a>

```python
ui_color_palette: DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference">DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfiguration">DataAwsccQuicksightThemeVersionConfiguration</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tile">tile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout">tile_layout</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet">DataAwsccQuicksightThemeVersionConfigurationSheet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tile`<sup>Required</sup> <a name="tile" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tile"></a>

```python
tile: DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference</a>

---

##### `tile_layout`<sup>Required</sup> <a name="tile_layout" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.tileLayout"></a>

```python
tile_layout: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationSheet
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheet">DataAwsccQuicksightThemeVersionConfigurationSheet</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorder</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutter</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show">show</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show`<sup>Required</sup> <a name="show" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.show"></a>

```python
show: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMargin</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter">gutter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin">margin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gutter`<sup>Required</sup> <a name="gutter" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.gutter"></a>

```python
gutter: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutGutterOutputReference</a>

---

##### `margin`<sup>Required</sup> <a name="margin" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.margin"></a>

```python
margin: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutMarginOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayoutOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout">DataAwsccQuicksightThemeVersionConfigurationSheetTileLayout</a>

---


### DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.border">border</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile">DataAwsccQuicksightThemeVersionConfigurationSheetTile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `border`<sup>Required</sup> <a name="border" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.border"></a>

```python
border: DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference">DataAwsccQuicksightThemeVersionConfigurationSheetTileBorderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationSheetTile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationSheetTile">DataAwsccQuicksightThemeVersionConfigurationSheetTile</a>

---


### DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily">font_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_family`<sup>Required</sup> <a name="font_family" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.fontFamily"></a>

```python
font_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamilies</a>

---


### DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies">font_families</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography">DataAwsccQuicksightThemeVersionConfigurationTypography</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `font_families`<sup>Required</sup> <a name="font_families" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.fontFamilies"></a>

```python
font_families: DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList">DataAwsccQuicksightThemeVersionConfigurationTypographyFontFamiliesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypographyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationTypography
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationTypography">DataAwsccQuicksightThemeVersionConfigurationTypography</a>

---


### DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference <a name="DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent">accent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground">accent_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger">danger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground">danger_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension">dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground">dimension_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure">measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground">measure_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground">primary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground">primary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground">secondary_background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground">secondary_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success">success</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground">success_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground">warning_foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette">DataAwsccQuicksightThemeVersionConfigurationUiColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accent"></a>

```python
accent: str
```

- *Type:* str

---

##### `accent_foreground`<sup>Required</sup> <a name="accent_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.accentForeground"></a>

```python
accent_foreground: str
```

- *Type:* str

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.danger"></a>

```python
danger: str
```

- *Type:* str

---

##### `danger_foreground`<sup>Required</sup> <a name="danger_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dangerForeground"></a>

```python
danger_foreground: str
```

- *Type:* str

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimension"></a>

```python
dimension: str
```

- *Type:* str

---

##### `dimension_foreground`<sup>Required</sup> <a name="dimension_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.dimensionForeground"></a>

```python
dimension_foreground: str
```

- *Type:* str

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measure"></a>

```python
measure: str
```

- *Type:* str

---

##### `measure_foreground`<sup>Required</sup> <a name="measure_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.measureForeground"></a>

```python
measure_foreground: str
```

- *Type:* str

---

##### `primary_background`<sup>Required</sup> <a name="primary_background" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryBackground"></a>

```python
primary_background: str
```

- *Type:* str

---

##### `primary_foreground`<sup>Required</sup> <a name="primary_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.primaryForeground"></a>

```python
primary_foreground: str
```

- *Type:* str

---

##### `secondary_background`<sup>Required</sup> <a name="secondary_background" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryBackground"></a>

```python
secondary_background: str
```

- *Type:* str

---

##### `secondary_foreground`<sup>Required</sup> <a name="secondary_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.secondaryForeground"></a>

```python
secondary_foreground: str
```

- *Type:* str

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.success"></a>

```python
success: str
```

- *Type:* str

---

##### `success_foreground`<sup>Required</sup> <a name="success_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.successForeground"></a>

```python
success_foreground: str
```

- *Type:* str

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `warning_foreground`<sup>Required</sup> <a name="warning_foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.warningForeground"></a>

```python
warning_foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionConfigurationUiColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationUiColorPalette">DataAwsccQuicksightThemeVersionConfigurationUiColorPalette</a>

---


### DataAwsccQuicksightThemeVersionErrorsList <a name="DataAwsccQuicksightThemeVersionErrorsList" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightThemeVersionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightThemeVersionErrorsOutputReference <a name="DataAwsccQuicksightThemeVersionErrorsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors">DataAwsccQuicksightThemeVersionErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersionErrors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrors">DataAwsccQuicksightThemeVersionErrors</a>

---


### DataAwsccQuicksightThemeVersionOutputReference <a name="DataAwsccQuicksightThemeVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_theme

dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.baseThemeId">base_theme_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference">DataAwsccQuicksightThemeVersionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList">DataAwsccQuicksightThemeVersionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.versionNumber">version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion">DataAwsccQuicksightThemeVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `base_theme_id`<sup>Required</sup> <a name="base_theme_id" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.baseThemeId"></a>

```python
base_theme_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.configuration"></a>

```python
configuration: DataAwsccQuicksightThemeVersionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionConfigurationOutputReference">DataAwsccQuicksightThemeVersionConfigurationOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.errors"></a>

```python
errors: DataAwsccQuicksightThemeVersionErrorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionErrorsList">DataAwsccQuicksightThemeVersionErrorsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.versionNumber"></a>

```python
version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightThemeVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightTheme.DataAwsccQuicksightThemeVersion">DataAwsccQuicksightThemeVersion</a>

---



