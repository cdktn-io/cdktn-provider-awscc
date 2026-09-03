# `dataAwsccConnectDataTableRecord` Submodule <a name="`dataAwsccConnectDataTableRecord` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectDataTableRecord <a name="DataAwsccConnectDataTableRecord" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_data_table_record awscc_connect_data_table_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_data_table_record#id DataAwsccConnectDataTableRecord#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConnectDataTableRecord resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConnectDataTableRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConnectDataTableRecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConnectDataTableRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_data_table_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectDataTableRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.dataTableArn">data_table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.dataTableRecord">data_table_record</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference">DataAwsccConnectDataTableRecordDataTableRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.recordId">record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `data_table_arn`<sup>Required</sup> <a name="data_table_arn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.dataTableArn"></a>

```python
data_table_arn: str
```

- *Type:* str

---

##### `data_table_record`<sup>Required</sup> <a name="data_table_record" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.dataTableRecord"></a>

```python
data_table_record: DataAwsccConnectDataTableRecordDataTableRecordOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference">DataAwsccConnectDataTableRecordDataTableRecordOutputReference</a>

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `record_id`<sup>Required</sup> <a name="record_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.recordId"></a>

```python
record_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectDataTableRecordConfig <a name="DataAwsccConnectDataTableRecordConfig" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/connect_data_table_record#id DataAwsccConnectDataTableRecord#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectDataTableRecordDataTableRecord <a name="DataAwsccConnectDataTableRecordDataTableRecord" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecord.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecord()
```


### DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues <a name="DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues()
```


### DataAwsccConnectDataTableRecordDataTableRecordValues <a name="DataAwsccConnectDataTableRecordDataTableRecordValues" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValues()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectDataTableRecordDataTableRecordOutputReference <a name="DataAwsccConnectDataTableRecordDataTableRecordOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues">primary_values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList">DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList">DataAwsccConnectDataTableRecordDataTableRecordValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecord">DataAwsccConnectDataTableRecordDataTableRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_values`<sup>Required</sup> <a name="primary_values" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues"></a>

```python
primary_values: DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList">DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.values"></a>

```python
values: DataAwsccConnectDataTableRecordDataTableRecordValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList">DataAwsccConnectDataTableRecordDataTableRecordValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectDataTableRecordDataTableRecord
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecord">DataAwsccConnectDataTableRecordDataTableRecord</a>

---


### DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList <a name="DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference <a name="DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId">attribute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues">DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_id`<sup>Required</sup> <a name="attribute_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues">DataAwsccConnectDataTableRecordDataTableRecordPrimaryValues</a>

---


### DataAwsccConnectDataTableRecordDataTableRecordValuesList <a name="DataAwsccConnectDataTableRecordDataTableRecordValuesList" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference <a name="DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_data_table_record

dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId">attribute_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValues">DataAwsccConnectDataTableRecordDataTableRecordValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_id`<sup>Required</sup> <a name="attribute_id" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId"></a>

```python
attribute_id: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectDataTableRecordDataTableRecordValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectDataTableRecord.DataAwsccConnectDataTableRecordDataTableRecordValues">DataAwsccConnectDataTableRecordDataTableRecordValues</a>

---



