# `dataAwsccQuicksightBrand` Submodule <a name="`dataAwsccQuicksightBrand` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightBrand <a name="DataAwsccQuicksightBrand" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/quicksight_brand awscc_quicksight_brand}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrand(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/quicksight_brand#id DataAwsccQuicksightBrand#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightBrand resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQuicksightBrand resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQuicksightBrand to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQuicksightBrand that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/quicksight_brand#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightBrand to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandDefinition">brand_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference">DataAwsccQuicksightBrandBrandDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandId">brand_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandStatus">brand_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList">DataAwsccQuicksightBrandTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionStatus">version_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `brand_definition`<sup>Required</sup> <a name="brand_definition" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandDefinition"></a>

```python
brand_definition: DataAwsccQuicksightBrandBrandDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference">DataAwsccQuicksightBrandBrandDefinitionOutputReference</a>

---

##### `brand_id`<sup>Required</sup> <a name="brand_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandId"></a>

```python
brand_id: str
```

- *Type:* str

---

##### `brand_status`<sup>Required</sup> <a name="brand_status" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.brandStatus"></a>

```python
brand_status: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tags"></a>

```python
tags: DataAwsccQuicksightBrandTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList">DataAwsccQuicksightBrandTagsList</a>

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `version_status`<sup>Required</sup> <a name="version_status" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.versionStatus"></a>

```python
version_status: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrand.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightBrandBrandDefinition <a name="DataAwsccQuicksightBrandBrandDefinition" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationTheme <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationTheme" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar()
```


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar()
```


### DataAwsccQuicksightBrandConfig <a name="DataAwsccQuicksightBrandConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.106.0/docs/data-sources/quicksight_brand#id DataAwsccQuicksightBrand#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightBrandTags <a name="DataAwsccQuicksightBrandTags" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccent</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDanger</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimension</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfo</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasure</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent">accent</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger">danger</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info">info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure">measure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary">primary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary">secondary</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success">success</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning">warning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accent`<sup>Required</sup> <a name="accent" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.accent"></a>

```python
accent: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteAccentOutputReference</a>

---

##### `danger`<sup>Required</sup> <a name="danger" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.danger"></a>

```python
danger: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDangerOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.dimension"></a>

```python
dimension: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteDimensionOutputReference</a>

---

##### `info`<sup>Required</sup> <a name="info" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.info"></a>

```python
info: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteInfoOutputReference</a>

---

##### `measure`<sup>Required</sup> <a name="measure" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.measure"></a>

```python
measure: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteMeasureOutputReference</a>

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.primary"></a>

```python
primary: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference</a>

---

##### `secondary`<sup>Required</sup> <a name="secondary" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.secondary"></a>

```python
secondary: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.success"></a>

```python
success: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference</a>

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.warning"></a>

```python
warning: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalette</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPalettePrimary</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondaryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSecondary</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteSuccess</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarningOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteWarning</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbar</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background">background</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground">foreground</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `background`<sup>Required</sup> <a name="background" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.background"></a>

```python
background: str
```

- *Type:* str

---

##### `foreground`<sup>Required</sup> <a name="foreground" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.foreground"></a>

```python
foreground: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbar</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar">contextual_navbar</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar">global_navbar</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contextual_navbar`<sup>Required</sup> <a name="contextual_navbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.contextualNavbar"></a>

```python
contextual_navbar: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleContextualNavbarOutputReference</a>

---

##### `global_navbar`<sup>Required</sup> <a name="global_navbar" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.globalNavbar"></a>

```python
global_navbar: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleGlobalNavbarOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyle</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle">navbar_style</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `navbar_style`<sup>Required</sup> <a name="navbar_style" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.navbarStyle"></a>

```python
navbar_style: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleNavbarStyleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyle</a>

---


### DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette">brand_color_palette</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle">brand_element_style</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme">DataAwsccQuicksightBrandBrandDefinitionApplicationTheme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `brand_color_palette`<sup>Required</sup> <a name="brand_color_palette" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandColorPalette"></a>

```python
brand_color_palette: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandColorPaletteOutputReference</a>

---

##### `brand_element_style`<sup>Required</sup> <a name="brand_element_style" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.brandElementStyle"></a>

```python
brand_element_style: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeBrandElementStyleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinitionApplicationTheme
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationTheme">DataAwsccQuicksightBrandBrandDefinitionApplicationTheme</a>

---


### DataAwsccQuicksightBrandBrandDefinitionOutputReference <a name="DataAwsccQuicksightBrandBrandDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.applicationTheme">application_theme</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.brandName">brand_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition">DataAwsccQuicksightBrandBrandDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_theme`<sup>Required</sup> <a name="application_theme" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.applicationTheme"></a>

```python
application_theme: DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference">DataAwsccQuicksightBrandBrandDefinitionApplicationThemeOutputReference</a>

---

##### `brand_name`<sup>Required</sup> <a name="brand_name" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.brandName"></a>

```python
brand_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandBrandDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandBrandDefinition">DataAwsccQuicksightBrandBrandDefinition</a>

---


### DataAwsccQuicksightBrandTagsList <a name="DataAwsccQuicksightBrandTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightBrandTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightBrandTagsOutputReference <a name="DataAwsccQuicksightBrandTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_brand

dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags">DataAwsccQuicksightBrandTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightBrandTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightBrand.DataAwsccQuicksightBrandTags">DataAwsccQuicksightBrandTags</a>

---



