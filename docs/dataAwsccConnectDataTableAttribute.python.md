# `dataAwsccConnectDataTableAttribute` Submodule <a name="`dataAwsccConnectDataTableAttribute` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectDataTableAttribute <a name="DataAwsccConnectDataTableAttribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_data_table_attribute awscc_connect_data_table_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_data_table_attribute#id DataAwsccConnectDataTableAttribute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConnectDataTableAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConnectDataTableAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConnectDataTableAttribute to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConnectDataTableAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectDataTableAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.attributeId">attribute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dataTableArn">data_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedRegion">last_modified_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedTime">last_modified_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lockVersion">lock_version</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference">DataAwsccConnectDataTableAttributeLockVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference">DataAwsccConnectDataTableAttributeValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `attribute_id`<sup>Required</sup> <a name="attribute_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.dataTableArn"></a>

```python
data_table_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `last_modified_region`<sup>Required</sup> <a name="last_modified_region" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedRegion"></a>

```python
last_modified_region: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lastModifiedTime"></a>

```python
last_modified_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lock_version`<sup>Required</sup> <a name="lock_version" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.lockVersion"></a>

```python
lock_version: DataAwsccConnectDataTableAttributeLockVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference">DataAwsccConnectDataTableAttributeLockVersionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.validation"></a>

```python
validation: DataAwsccConnectDataTableAttributeValidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference">DataAwsccConnectDataTableAttributeValidationOutputReference</a>

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttribute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectDataTableAttributeConfig <a name="DataAwsccConnectDataTableAttributeConfig" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_data_table_attribute#id DataAwsccConnectDataTableAttribute#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectDataTableAttributeLockVersion <a name="DataAwsccConnectDataTableAttributeLockVersion" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion()
```


### DataAwsccConnectDataTableAttributeValidation <a name="DataAwsccConnectDataTableAttributeValidation" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation()
```


### DataAwsccConnectDataTableAttributeValidationEnum <a name="DataAwsccConnectDataTableAttributeValidationEnum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectDataTableAttributeLockVersionOutputReference <a name="DataAwsccConnectDataTableAttributeLockVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.dataTable">data_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion">DataAwsccConnectDataTableAttributeLockVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `data_table`<sup>Required</sup> <a name="data_table" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.dataTable"></a>

```python
data_table: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectDataTableAttributeLockVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeLockVersion">DataAwsccConnectDataTableAttributeLockVersion</a>

---


### DataAwsccConnectDataTableAttributeValidationEnumOutputReference <a name="DataAwsccConnectDataTableAttributeValidationEnumOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.strict">strict</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum">DataAwsccConnectDataTableAttributeValidationEnum</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.strict"></a>

```python
strict: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectDataTableAttributeValidationEnum
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnum">DataAwsccConnectDataTableAttributeValidationEnum</a>

---


### DataAwsccConnectDataTableAttributeValidationOutputReference <a name="DataAwsccConnectDataTableAttributeValidationOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_attribute

dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference">DataAwsccConnectDataTableAttributeValidationEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum">exclusive_maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum">exclusive_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maximum">maximum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxLength">max_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxValues">max_values</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minimum">minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minLength">min_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minValues">min_values</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.multipleOf">multiple_of</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation">DataAwsccConnectDataTableAttributeValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.enum"></a>

```python
enum: DataAwsccConnectDataTableAttributeValidationEnumOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationEnumOutputReference">DataAwsccConnectDataTableAttributeValidationEnumOutputReference</a>

---

##### `exclusive_maximum`<sup>Required</sup> <a name="exclusive_maximum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum"></a>

```python
exclusive_maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exclusive_minimum`<sup>Required</sup> <a name="exclusive_minimum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum"></a>

```python
exclusive_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maximum"></a>

```python
maximum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_length`<sup>Required</sup> <a name="max_length" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxLength"></a>

```python
max_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_values`<sup>Required</sup> <a name="max_values" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.maxValues"></a>

```python
max_values: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minimum"></a>

```python
minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_length`<sup>Required</sup> <a name="min_length" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minLength"></a>

```python
min_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_values`<sup>Required</sup> <a name="min_values" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.minValues"></a>

```python
min_values: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multiple_of`<sup>Required</sup> <a name="multiple_of" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.multipleOf"></a>

```python
multiple_of: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectDataTableAttributeValidation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableAttribute.DataAwsccConnectDataTableAttributeValidation">DataAwsccConnectDataTableAttributeValidation</a>

---



