# `dataAwsccCleanroomsIntermediateTable` Submodule <a name="`dataAwsccCleanroomsIntermediateTable` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsIntermediateTable <a name="DataAwsccCleanroomsIntermediateTable" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_intermediate_table#id DataAwsccCleanroomsIntermediateTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCleanroomsIntermediateTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCleanroomsIntermediateTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_intermediate_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsIntermediateTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.analysisRules">analysis_rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList">DataAwsccCleanroomsIntermediateTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.intermediateTableIdentifier">intermediate_table_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.populationAnalysisConfiguration">population_analysis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList">DataAwsccCleanroomsIntermediateTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `analysis_rules`<sup>Required</sup> <a name="analysis_rules" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.analysisRules"></a>

```python
analysis_rules: DataAwsccCleanroomsIntermediateTableAnalysisRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList">DataAwsccCleanroomsIntermediateTableAnalysisRulesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `intermediate_table_identifier`<sup>Required</sup> <a name="intermediate_table_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.intermediateTableIdentifier"></a>

```python
intermediate_table_identifier: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `population_analysis_configuration`<sup>Required</sup> <a name="population_analysis_configuration" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.populationAnalysisConfiguration"></a>

```python
population_analysis_configuration: DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.tags"></a>

```python
tags: DataAwsccCleanroomsIntermediateTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList">DataAwsccCleanroomsIntermediateTableTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsIntermediateTableAnalysisRules <a name="DataAwsccCleanroomsIntermediateTableAnalysisRules" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRules.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRules()
```


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy()
```


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1 <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1()
```


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom()
```


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy()
```


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns()
```


### DataAwsccCleanroomsIntermediateTableConfig <a name="DataAwsccCleanroomsIntermediateTableConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cleanrooms_intermediate_table#id DataAwsccCleanroomsIntermediateTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration <a name="DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration()
```


### DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters <a name="DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters()
```


### DataAwsccCleanroomsIntermediateTableTags <a name="DataAwsccCleanroomsIntermediateTableTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsIntermediateTableAnalysisRulesList <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesList" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRules">DataAwsccCleanroomsIntermediateTableAnalysisRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy"></a>

```python
policy: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTableAnalysisRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRules">DataAwsccCleanroomsIntermediateTableAnalysisRules</a>

---


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```python
v1: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicy</a>

---


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>

---


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```python
columns: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">additional_analyses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">allowed_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">allowed_analysis_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">differential_privacy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">disallowed_output_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_analyses`<sup>Required</sup> <a name="additional_analyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```python
additional_analyses: str
```

- *Type:* str

---

##### `allowed_analyses`<sup>Required</sup> <a name="allowed_analyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```python
allowed_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_analysis_providers`<sup>Required</sup> <a name="allowed_analysis_providers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```python
allowed_analysis_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `differential_privacy`<sup>Required</sup> <a name="differential_privacy" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```python
differential_privacy: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `disallowed_output_columns`<sup>Required</sup> <a name="disallowed_output_columns" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```python
disallowed_output_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---


### DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference <a name="DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```python
custom: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1">DataAwsccCleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---


### DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference <a name="DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters">sql_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_parameters`<sup>Required</sup> <a name="sql_parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters"></a>

```python
sql_parameters: DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---


### DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference <a name="DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn">analysis_template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis_template_arn`<sup>Required</sup> <a name="analysis_template_arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn"></a>

```python
analysis_template_arn: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">DataAwsccCleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---


### DataAwsccCleanroomsIntermediateTableTagsList <a name="DataAwsccCleanroomsIntermediateTableTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCleanroomsIntermediateTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCleanroomsIntermediateTableTagsOutputReference <a name="DataAwsccCleanroomsIntermediateTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cleanrooms_intermediate_table

dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTags">DataAwsccCleanroomsIntermediateTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCleanroomsIntermediateTableTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsIntermediateTable.DataAwsccCleanroomsIntermediateTableTags">DataAwsccCleanroomsIntermediateTableTags</a>

---



