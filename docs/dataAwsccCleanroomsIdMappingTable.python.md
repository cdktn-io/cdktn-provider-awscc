# `dataAwsccCleanroomsIdMappingTable` Submodule <a name="`dataAwsccCleanroomsIdMappingTable` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsIdMappingTable <a name="DataAwsccCleanroomsIdMappingTable" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_id_mapping_table awscc_cleanrooms_id_mapping_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_id_mapping_table#id DataAwsccCleanroomsIdMappingTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsIdMappingTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsIdMappingTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsIdMappingTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_id_mapping_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsIdMappingTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idMappingTableIdentifier">id_mapping_table_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceConfig">input_reference_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference">DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceProperties">input_reference_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList">DataAwsccCleanroomsIdMappingTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id_mapping_table_identifier`<sup>Required</sup> <a name="id_mapping_table_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idMappingTableIdentifier"></a>

```python
id_mapping_table_identifier: str
```

- *Type:* str

---

##### `input_reference_config`<sup>Required</sup> <a name="input_reference_config" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceConfig"></a>

```python
input_reference_config: DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference">DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference</a>

---

##### `input_reference_properties`<sup>Required</sup> <a name="input_reference_properties" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.inputReferenceProperties"></a>

```python
input_reference_properties: DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference</a>

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tags"></a>

```python
tags: DataAwsccCleanroomsIdMappingTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList">DataAwsccCleanroomsIdMappingTableTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsIdMappingTableConfig <a name="DataAwsccCleanroomsIdMappingTableConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_id_mapping_table#id DataAwsccCleanroomsIdMappingTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsIdMappingTableInputReferenceConfig <a name="DataAwsccCleanroomsIdMappingTableInputReferenceConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig()
```


### DataAwsccCleanroomsIdMappingTableInputReferenceProperties <a name="DataAwsccCleanroomsIdMappingTableInputReferenceProperties" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties()
```


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource()
```


### DataAwsccCleanroomsIdMappingTableTags <a name="DataAwsccCleanroomsIdMappingTableTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference <a name="DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn">input_reference_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies">manage_resource_policies</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig">DataAwsccCleanroomsIdMappingTableInputReferenceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_reference_arn`<sup>Required</sup> <a name="input_reference_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.inputReferenceArn"></a>

```python
input_reference_arn: str
```

- *Type:* str

---

##### `manage_resource_policies`<sup>Required</sup> <a name="manage_resource_policies" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.manageResourcePolicies"></a>

```python
manage_resource_policies: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIdMappingTableInputReferenceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceConfig">DataAwsccCleanroomsIdMappingTableInputReferenceConfig</a>

---


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId">id_namespace_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_namespace_association_id`<sup>Required</sup> <a name="id_namespace_association_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.idNamespaceAssociationId"></a>

```python
id_namespace_association_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSource</a>

---


### DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference <a name="DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource">id_mapping_table_input_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties">DataAwsccCleanroomsIdMappingTableInputReferenceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_mapping_table_input_source`<sup>Required</sup> <a name="id_mapping_table_input_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.idMappingTableInputSource"></a>

```python
id_mapping_table_input_source: DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList">DataAwsccCleanroomsIdMappingTableInputReferencePropertiesIdMappingTableInputSourceList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferencePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIdMappingTableInputReferenceProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableInputReferenceProperties">DataAwsccCleanroomsIdMappingTableInputReferenceProperties</a>

---


### DataAwsccCleanroomsIdMappingTableTagsList <a name="DataAwsccCleanroomsIdMappingTableTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsIdMappingTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsIdMappingTableTagsOutputReference <a name="DataAwsccCleanroomsIdMappingTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_id_mapping_table

dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags">DataAwsccCleanroomsIdMappingTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIdMappingTableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIdMappingTable.DataAwsccCleanroomsIdMappingTableTags">DataAwsccCleanroomsIdMappingTableTags</a>

---



