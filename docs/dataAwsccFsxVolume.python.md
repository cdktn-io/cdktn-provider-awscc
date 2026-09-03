# `dataAwsccFsxVolume` Submodule <a name="`dataAwsccFsxVolume` Submodule" id="@cdktn/provider-awscc.dataAwsccFsxVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFsxVolume <a name="DataAwsccFsxVolume" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume awscc_fsx_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolume(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#id DataAwsccFsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccFsxVolume resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolume.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccFsxVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccFsxVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccFsxVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFsxVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.ontapConfiguration">ontap_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.openZfsConfiguration">open_zfs_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList">DataAwsccFsxVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ontap_configuration`<sup>Required</sup> <a name="ontap_configuration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.ontapConfiguration"></a>

```python
ontap_configuration: DataAwsccFsxVolumeOntapConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationOutputReference</a>

---

##### `open_zfs_configuration`<sup>Required</sup> <a name="open_zfs_configuration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.openZfsConfiguration"></a>

```python
open_zfs_configuration: DataAwsccFsxVolumeOpenZfsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOutputReference</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tags"></a>

```python
tags: DataAwsccFsxVolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList">DataAwsccFsxVolumeTagsList</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFsxVolumeConfig <a name="DataAwsccFsxVolumeConfig" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_volume#id DataAwsccFsxVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFsxVolumeOntapConfiguration <a name="DataAwsccFsxVolumeOntapConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration()
```


### DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration <a name="DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration()
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration()
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod()
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod()
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention()
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention()
```


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention()
```


### DataAwsccFsxVolumeOntapConfigurationTieringPolicy <a name="DataAwsccFsxVolumeOntapConfigurationTieringPolicy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy()
```


### DataAwsccFsxVolumeOpenZfsConfiguration <a name="DataAwsccFsxVolumeOpenZfsConfiguration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration()
```


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExports <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExports" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports()
```


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations()
```


### DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot <a name="DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot()
```


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas()
```


### DataAwsccFsxVolumeTags <a name="DataAwsccFsxVolumeTags" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates">aggregates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate">constituents_per_aggregate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration">DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregates`<sup>Required</sup> <a name="aggregates" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.aggregates"></a>

```python
aggregates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `constituents_per_aggregate`<sup>Required</sup> <a name="constituents_per_aggregate" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.constituentsPerAggregate"></a>

```python
constituents_per_aggregate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration">DataAwsccFsxVolumeOntapConfigurationAggregateConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration">aggregate_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups">copy_tags_to_backups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.junctionPath">junction_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType">ontap_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes">size_in_megabytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration">snaplock_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy">snapshot_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled">storage_efficiency_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId">storage_virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.tieringPolicy">tiering_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference">DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.volumeStyle">volume_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration">DataAwsccFsxVolumeOntapConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregate_configuration`<sup>Required</sup> <a name="aggregate_configuration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.aggregateConfiguration"></a>

```python
aggregate_configuration: DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationAggregateConfigurationOutputReference</a>

---

##### `copy_tags_to_backups`<sup>Required</sup> <a name="copy_tags_to_backups" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.copyTagsToBackups"></a>

```python
copy_tags_to_backups: str
```

- *Type:* str

---

##### `junction_path`<sup>Required</sup> <a name="junction_path" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.junctionPath"></a>

```python
junction_path: str
```

- *Type:* str

---

##### `ontap_volume_type`<sup>Required</sup> <a name="ontap_volume_type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.ontapVolumeType"></a>

```python
ontap_volume_type: str
```

- *Type:* str

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `size_in_megabytes`<sup>Required</sup> <a name="size_in_megabytes" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.sizeInMegabytes"></a>

```python
size_in_megabytes: str
```

- *Type:* str

---

##### `snaplock_configuration`<sup>Required</sup> <a name="snaplock_configuration" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snaplockConfiguration"></a>

```python
snaplock_configuration: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference</a>

---

##### `snapshot_policy`<sup>Required</sup> <a name="snapshot_policy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.snapshotPolicy"></a>

```python
snapshot_policy: str
```

- *Type:* str

---

##### `storage_efficiency_enabled`<sup>Required</sup> <a name="storage_efficiency_enabled" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageEfficiencyEnabled"></a>

```python
storage_efficiency_enabled: str
```

- *Type:* str

---

##### `storage_virtual_machine_id`<sup>Required</sup> <a name="storage_virtual_machine_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.storageVirtualMachineId"></a>

```python
storage_virtual_machine_id: str
```

- *Type:* str

---

##### `tiering_policy`<sup>Required</sup> <a name="tiering_policy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.tieringPolicy"></a>

```python
tiering_policy: DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference">DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference</a>

---

##### `volume_style`<sup>Required</sup> <a name="volume_style" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.volumeStyle"></a>

```python
volume_style: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfiguration">DataAwsccFsxVolumeOntapConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriod</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume">audit_log_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod">autocommit_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete">privileged_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod">retention_period</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType">snaplock_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled">volume_append_mode_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration">DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_log_volume`<sup>Required</sup> <a name="audit_log_volume" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.auditLogVolume"></a>

```python
audit_log_volume: str
```

- *Type:* str

---

##### `autocommit_period`<sup>Required</sup> <a name="autocommit_period" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.autocommitPeriod"></a>

```python
autocommit_period: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationAutocommitPeriodOutputReference</a>

---

##### `privileged_delete`<sup>Required</sup> <a name="privileged_delete" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.privilegedDelete"></a>

```python
privileged_delete: str
```

- *Type:* str

---

##### `retention_period`<sup>Required</sup> <a name="retention_period" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.retentionPeriod"></a>

```python
retention_period: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference</a>

---

##### `snaplock_type`<sup>Required</sup> <a name="snaplock_type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.snaplockType"></a>

```python
snaplock_type: str
```

- *Type:* str

---

##### `volume_append_mode_enabled`<sup>Required</sup> <a name="volume_append_mode_enabled" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.volumeAppendModeEnabled"></a>

```python
volume_append_mode_enabled: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration">DataAwsccFsxVolumeOntapConfigurationSnaplockConfiguration</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetention</a>

---


### DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention">default_retention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention">maximum_retention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention">minimum_retention</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_retention`<sup>Required</sup> <a name="default_retention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.defaultRetention"></a>

```python
default_retention: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodDefaultRetentionOutputReference</a>

---

##### `maximum_retention`<sup>Required</sup> <a name="maximum_retention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.maximumRetention"></a>

```python
maximum_retention: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMaximumRetentionOutputReference</a>

---

##### `minimum_retention`<sup>Required</sup> <a name="minimum_retention" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.minimumRetention"></a>

```python
minimum_retention: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodMinimumRetentionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod">DataAwsccFsxVolumeOntapConfigurationSnaplockConfigurationRetentionPeriod</a>

---


### DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference <a name="DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod">cooling_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy">DataAwsccFsxVolumeOntapConfigurationTieringPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cooling_period`<sup>Required</sup> <a name="cooling_period" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.coolingPeriod"></a>

```python
cooling_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOntapConfigurationTieringPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOntapConfigurationTieringPolicy">DataAwsccFsxVolumeOntapConfigurationTieringPolicy</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients">clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `clients`<sup>Required</sup> <a name="clients" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.clients"></a>

```python
clients: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurations</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations">client_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports">DataAwsccFsxVolumeOpenZfsConfigurationNfsExports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_configurations`<sup>Required</sup> <a name="client_configurations" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.clientConfigurations"></a>

```python
client_configurations: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsClientConfigurationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOpenZfsConfigurationNfsExports
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExports">DataAwsccFsxVolumeOpenZfsConfigurationNfsExports</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy">copy_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn">snapshot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_strategy`<sup>Required</sup> <a name="copy_strategy" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.copyStrategy"></a>

```python
copy_strategy: str
```

- *Type:* str

---

##### `snapshot_arn`<sup>Required</sup> <a name="snapshot_arn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.snapshotArn"></a>

```python
snapshot_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshot</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots">copy_tags_to_snapshots</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType">data_compression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports">nfs_exports</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.options">options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot">origin_snapshot</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId">parent_volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.readOnly">read_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB">record_size_ki_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB">storage_capacity_quota_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB">storage_capacity_reservation_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas">user_and_group_quotas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration">DataAwsccFsxVolumeOpenZfsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `copy_tags_to_snapshots`<sup>Required</sup> <a name="copy_tags_to_snapshots" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.copyTagsToSnapshots"></a>

```python
copy_tags_to_snapshots: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_compression_type`<sup>Required</sup> <a name="data_compression_type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.dataCompressionType"></a>

```python
data_compression_type: str
```

- *Type:* str

---

##### `nfs_exports`<sup>Required</sup> <a name="nfs_exports" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.nfsExports"></a>

```python
nfs_exports: DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList">DataAwsccFsxVolumeOpenZfsConfigurationNfsExportsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.options"></a>

```python
options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `origin_snapshot`<sup>Required</sup> <a name="origin_snapshot" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.originSnapshot"></a>

```python
origin_snapshot: DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference">DataAwsccFsxVolumeOpenZfsConfigurationOriginSnapshotOutputReference</a>

---

##### `parent_volume_id`<sup>Required</sup> <a name="parent_volume_id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.parentVolumeId"></a>

```python
parent_volume_id: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.readOnly"></a>

```python
read_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `record_size_ki_b`<sup>Required</sup> <a name="record_size_ki_b" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.recordSizeKiB"></a>

```python
record_size_ki_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gi_b`<sup>Required</sup> <a name="storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityQuotaGiB"></a>

```python
storage_capacity_quota_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_reservation_gi_b`<sup>Required</sup> <a name="storage_capacity_reservation_gi_b" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.storageCapacityReservationGiB"></a>

```python
storage_capacity_reservation_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_and_group_quotas`<sup>Required</sup> <a name="user_and_group_quotas" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.userAndGroupQuotas"></a>

```python
user_and_group_quotas: DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOpenZfsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfiguration">DataAwsccFsxVolumeOpenZfsConfiguration</a>

---


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference <a name="DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB">storage_capacity_quota_gi_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_capacity_quota_gi_b`<sup>Required</sup> <a name="storage_capacity_quota_gi_b" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.storageCapacityQuotaGiB"></a>

```python
storage_capacity_quota_gi_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotasOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas">DataAwsccFsxVolumeOpenZfsConfigurationUserAndGroupQuotas</a>

---


### DataAwsccFsxVolumeTagsList <a name="DataAwsccFsxVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFsxVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFsxVolumeTagsOutputReference <a name="DataAwsccFsxVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_volume

dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags">DataAwsccFsxVolumeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxVolumeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxVolume.DataAwsccFsxVolumeTags">DataAwsccFsxVolumeTags</a>

---



