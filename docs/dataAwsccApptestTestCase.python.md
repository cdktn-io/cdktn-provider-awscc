# `dataAwsccApptestTestCase` Submodule <a name="`dataAwsccApptestTestCase` Submodule" id="@cdktn/provider-awscc.dataAwsccApptestTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApptestTestCase <a name="DataAwsccApptestTestCase" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/apptest_test_case awscc_apptest_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCase(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/apptest_test_case#id DataAwsccApptestTestCase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccApptestTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccApptestTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccApptestTestCase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccApptestTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/apptest_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApptestTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lastUpdateTime">last_update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.latestVersion">latest_version</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference">DataAwsccApptestTestCaseLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList">DataAwsccApptestTestCaseStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseArn">test_case_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseId">test_case_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseVersion">test_case_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lastUpdateTime"></a>

```python
last_update_time: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.latestVersion"></a>

```python
latest_version: DataAwsccApptestTestCaseLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference">DataAwsccApptestTestCaseLatestVersionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.steps"></a>

```python
steps: DataAwsccApptestTestCaseStepsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList">DataAwsccApptestTestCaseStepsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `test_case_arn`<sup>Required</sup> <a name="test_case_arn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseArn"></a>

```python
test_case_arn: str
```

- *Type:* str

---

##### `test_case_id`<sup>Required</sup> <a name="test_case_id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseId"></a>

```python
test_case_id: str
```

- *Type:* str

---

##### `test_case_version`<sup>Required</sup> <a name="test_case_version" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseVersion"></a>

```python
test_case_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApptestTestCaseConfig <a name="DataAwsccApptestTestCaseConfig" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/apptest_test_case#id DataAwsccApptestTestCase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApptestTestCaseLatestVersion <a name="DataAwsccApptestTestCaseLatestVersion" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion()
```


### DataAwsccApptestTestCaseSteps <a name="DataAwsccApptestTestCaseSteps" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps()
```


### DataAwsccApptestTestCaseStepsAction <a name="DataAwsccApptestTestCaseStepsAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction()
```


### DataAwsccApptestTestCaseStepsActionCompareAction <a name="DataAwsccApptestTestCaseStepsActionCompareAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction()
```


### DataAwsccApptestTestCaseStepsActionCompareActionInput <a name="DataAwsccApptestTestCaseStepsActionCompareActionInput" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput()
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFile <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFile" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile()
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata()
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc()
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata()
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata()
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets()
```


### DataAwsccApptestTestCaseStepsActionCompareActionOutput <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutput" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput()
```


### DataAwsccApptestTestCaseStepsActionCompareActionOutputFile <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputFile" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile()
```


### DataAwsccApptestTestCaseStepsActionMainframeAction <a name="DataAwsccApptestTestCaseStepsActionMainframeAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction()
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionType <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType()
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch()
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270 <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270()
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script()
```


### DataAwsccApptestTestCaseStepsActionMainframeActionProperties <a name="DataAwsccApptestTestCaseStepsActionMainframeActionProperties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties()
```


### DataAwsccApptestTestCaseStepsActionResourceAction <a name="DataAwsccApptestTestCaseStepsActionResourceAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction()
```


### DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction <a name="DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction()
```


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction()
```


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties()
```


### DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApptestTestCaseLatestVersionOutputReference <a name="DataAwsccApptestTestCaseLatestVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion">DataAwsccApptestTestCaseLatestVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion">DataAwsccApptestTestCaseLatestVersion</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata">source_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata">target_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_metadata`<sup>Required</sup> <a name="source_metadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata"></a>

```python
source_metadata: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a>

---

##### `target_metadata`<sup>Required</sup> <a name="target_metadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata"></a>

```python
target_metadata: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool">capture_tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_tool`<sup>Required</sup> <a name="capture_tool" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool"></a>

```python
capture_tool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool">capture_tool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capture_tool`<sup>Required</sup> <a name="capture_tool" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool"></a>

```python
capture_tool: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid">ccsid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ccsid`<sup>Required</sup> <a name="ccsid" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid"></a>

```python
ccsid: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc">database_cdc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets">data_sets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_cdc`<sup>Required</sup> <a name="database_cdc" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc"></a>

```python
database_cdc: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a>

---

##### `data_sets`<sup>Required</sup> <a name="data_sets" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets"></a>

```python
data_sets: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata">file_metadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation">source_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation">target_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile">DataAwsccApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_metadata`<sup>Required</sup> <a name="file_metadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata"></a>

```python
file_metadata: DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a>

---

##### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

---

##### `target_location`<sup>Required</sup> <a name="target_location" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation"></a>

```python
target_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionInputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile">DataAwsccApptestTestCaseStepsActionCompareActionInputFile</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput">DataAwsccApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.file"></a>

```python
file: DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput">DataAwsccApptestTestCaseStepsActionCompareActionInput</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation">file_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile">DataAwsccApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_location`<sup>Required</sup> <a name="file_location" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation"></a>

```python
file_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionOutputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile">DataAwsccApptestTestCaseStepsActionCompareActionOutputFile</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput">DataAwsccApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file"></a>

```python
file: DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareActionOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput">DataAwsccApptestTestCaseStepsActionCompareActionOutput</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction">DataAwsccApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.input"></a>

```python
input: DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.output"></a>

```python
output: DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionCompareAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction">DataAwsccApptestTestCaseStepsActionCompareAction</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName">batch_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters">batch_job_parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames">export_data_set_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_job_name`<sup>Required</sup> <a name="batch_job_name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName"></a>

```python
batch_job_name: str
```

- *Type:* str

---

##### `batch_job_parameters`<sup>Required</sup> <a name="batch_job_parameters" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters"></a>

```python
batch_job_parameters: StringMap
```

- *Type:* cdktn.StringMap

---

##### `export_data_set_names`<sup>Required</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames"></a>

```python
export_data_set_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270">tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType">DataAwsccApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch"></a>

```python
batch: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a>

---

##### `tn3270`<sup>Required</sup> <a name="tn3270" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270"></a>

```python
tn3270: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionMainframeActionActionType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType">DataAwsccApptestTestCaseStepsActionMainframeActionActionType</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames">export_data_set_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script">script</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_data_set_names`<sup>Required</sup> <a name="export_data_set_names" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames"></a>

```python
export_data_set_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script"></a>

```python
script: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation">script_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_location`<sup>Required</sup> <a name="script_location" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation"></a>

```python
script_location: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType">action_type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction">DataAwsccApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType"></a>

```python
action_type: DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.properties"></a>

```python
properties: DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionMainframeAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction">DataAwsccApptestTestCaseStepsActionMainframeAction</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn">dms_task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties">DataAwsccApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dms_task_arn`<sup>Required</sup> <a name="dms_task_arn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn"></a>

```python
dms_task_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionMainframeActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties">DataAwsccApptestTestCaseStepsActionMainframeActionProperties</a>

---


### DataAwsccApptestTestCaseStepsActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.compareAction">compare_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.mainframeAction">mainframe_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.resourceAction">resource_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction">DataAwsccApptestTestCaseStepsAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compare_action`<sup>Required</sup> <a name="compare_action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.compareAction"></a>

```python
compare_action: DataAwsccApptestTestCaseStepsActionCompareActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputReference</a>

---

##### `mainframe_action`<sup>Required</sup> <a name="mainframe_action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.mainframeAction"></a>

```python
mainframe_action: DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference</a>

---

##### `resource_action`<sup>Required</sup> <a name="resource_action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.resourceAction"></a>

```python
resource_action: DataAwsccApptestTestCaseStepsActionResourceActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction">DataAwsccApptestTestCaseStepsAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties"></a>

```python
properties: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop">force_stop</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation">import_data_set_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `force_stop`<sup>Required</sup> <a name="force_stop" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop"></a>

```python
force_stop: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `import_data_set_location`<sup>Required</sup> <a name="import_data_set_location" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation"></a>

```python
import_data_set_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction">cloudformation_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction">m2_managed_application_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction">m2_non_managed_application_action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction">DataAwsccApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudformation_action`<sup>Required</sup> <a name="cloudformation_action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction"></a>

```python
cloudformation_action: DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a>

---

##### `m2_managed_application_action`<sup>Required</sup> <a name="m2_managed_application_action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction"></a>

```python
m2_managed_application_action: DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a>

---

##### `m2_non_managed_application_action`<sup>Required</sup> <a name="m2_non_managed_application_action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction"></a>

```python
m2_non_managed_application_action: DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseStepsActionResourceAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction">DataAwsccApptestTestCaseStepsActionResourceAction</a>

---


### DataAwsccApptestTestCaseStepsList <a name="DataAwsccApptestTestCaseStepsList" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccApptestTestCaseStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccApptestTestCaseStepsOutputReference <a name="DataAwsccApptestTestCaseStepsOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_apptest_test_case

dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference">DataAwsccApptestTestCaseStepsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps">DataAwsccApptestTestCaseSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.action"></a>

```python
action: DataAwsccApptestTestCaseStepsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference">DataAwsccApptestTestCaseStepsActionOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccApptestTestCaseSteps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps">DataAwsccApptestTestCaseSteps</a>

---



