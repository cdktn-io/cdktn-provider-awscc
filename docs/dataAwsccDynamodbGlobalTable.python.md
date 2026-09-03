# `dataAwsccDynamodbGlobalTable` Submodule <a name="`dataAwsccDynamodbGlobalTable` Submodule" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDynamodbGlobalTable <a name="DataAwsccDynamodbGlobalTable" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table awscc_dynamodb_global_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table#id DataAwsccDynamodbGlobalTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDynamodbGlobalTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDynamodbGlobalTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDynamodbGlobalTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDynamodbGlobalTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDynamodbGlobalTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.attributeDefinitions">attribute_definitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList">DataAwsccDynamodbGlobalTableAttributeDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.billingMode">billing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalSecondaryIndexes">global_secondary_indexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableSourceArn">global_table_source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableWitnesses">global_table_witnesses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList">DataAwsccDynamodbGlobalTableGlobalTableWitnessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList">DataAwsccDynamodbGlobalTableKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.localSecondaryIndexes">local_secondary_indexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.multiRegionConsistency">multi_region_consistency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readOnDemandThroughputSettings">read_on_demand_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readProvisionedThroughputSettings">read_provisioned_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList">DataAwsccDynamodbGlobalTableReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamSpecification">stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.timeToLiveSpecification">time_to_live_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeOnDemandThroughputSettings">write_on_demand_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeProvisionedThroughputSettings">write_provisioned_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attribute_definitions`<sup>Required</sup> <a name="attribute_definitions" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.attributeDefinitions"></a>

```python
attribute_definitions: DataAwsccDynamodbGlobalTableAttributeDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList">DataAwsccDynamodbGlobalTableAttributeDefinitionsList</a>

---

##### `billing_mode`<sup>Required</sup> <a name="billing_mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.billingMode"></a>

```python
billing_mode: str
```

- *Type:* str

---

##### `global_secondary_indexes`<sup>Required</sup> <a name="global_secondary_indexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalSecondaryIndexes"></a>

```python
global_secondary_indexes: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList</a>

---

##### `global_table_source_arn`<sup>Required</sup> <a name="global_table_source_arn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableSourceArn"></a>

```python
global_table_source_arn: str
```

- *Type:* str

---

##### `global_table_witnesses`<sup>Required</sup> <a name="global_table_witnesses" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.globalTableWitnesses"></a>

```python
global_table_witnesses: DataAwsccDynamodbGlobalTableGlobalTableWitnessesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList">DataAwsccDynamodbGlobalTableGlobalTableWitnessesList</a>

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.keySchema"></a>

```python
key_schema: DataAwsccDynamodbGlobalTableKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList">DataAwsccDynamodbGlobalTableKeySchemaList</a>

---

##### `local_secondary_indexes`<sup>Required</sup> <a name="local_secondary_indexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.localSecondaryIndexes"></a>

```python
local_secondary_indexes: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList</a>

---

##### `multi_region_consistency`<sup>Required</sup> <a name="multi_region_consistency" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.multiRegionConsistency"></a>

```python
multi_region_consistency: str
```

- *Type:* str

---

##### `read_on_demand_throughput_settings`<sup>Required</sup> <a name="read_on_demand_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readOnDemandThroughputSettings"></a>

```python
read_on_demand_throughput_settings: DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference</a>

---

##### `read_provisioned_throughput_settings`<sup>Required</sup> <a name="read_provisioned_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.readProvisionedThroughputSettings"></a>

```python
read_provisioned_throughput_settings: DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference</a>

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.replicas"></a>

```python
replicas: DataAwsccDynamodbGlobalTableReplicasList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList">DataAwsccDynamodbGlobalTableReplicasList</a>

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.sseSpecification"></a>

```python
sse_specification: DataAwsccDynamodbGlobalTableSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableSseSpecificationOutputReference</a>

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `stream_specification`<sup>Required</sup> <a name="stream_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.streamSpecification"></a>

```python
stream_specification: DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference</a>

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `time_to_live_specification`<sup>Required</sup> <a name="time_to_live_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.timeToLiveSpecification"></a>

```python
time_to_live_specification: DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference">DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference</a>

---

##### `warm_throughput`<sup>Required</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.warmThroughput"></a>

```python
warm_throughput: DataAwsccDynamodbGlobalTableWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableWarmThroughputOutputReference</a>

---

##### `write_on_demand_throughput_settings`<sup>Required</sup> <a name="write_on_demand_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeOnDemandThroughputSettings"></a>

```python
write_on_demand_throughput_settings: DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference</a>

---

##### `write_provisioned_throughput_settings`<sup>Required</sup> <a name="write_provisioned_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.writeProvisionedThroughputSettings"></a>

```python
write_provisioned_throughput_settings: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDynamodbGlobalTableAttributeDefinitions <a name="DataAwsccDynamodbGlobalTableAttributeDefinitions" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions()
```


### DataAwsccDynamodbGlobalTableConfig <a name="DataAwsccDynamodbGlobalTableConfig" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/dynamodb_global_table#id DataAwsccDynamodbGlobalTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings()
```


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration()
```


### DataAwsccDynamodbGlobalTableGlobalTableWitnesses <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnesses" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses()
```


### DataAwsccDynamodbGlobalTableKeySchema <a name="DataAwsccDynamodbGlobalTableKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema()
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes()
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema()
```


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection()
```


### DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings()
```


### DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings()
```


### DataAwsccDynamodbGlobalTableReplicas <a name="DataAwsccDynamodbGlobalTableReplicas" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas()
```


### DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification <a name="DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification()
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes()
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification()
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings()
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings()
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings()
```


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration()
```


### DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification <a name="DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification()
```


### DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification <a name="DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification()
```


### DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings()
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings()
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings()
```


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration()
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification()
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy()
```


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags()
```


### DataAwsccDynamodbGlobalTableReplicasResourcePolicy <a name="DataAwsccDynamodbGlobalTableReplicasResourcePolicy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy()
```


### DataAwsccDynamodbGlobalTableReplicasSseSpecification <a name="DataAwsccDynamodbGlobalTableReplicasSseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification()
```


### DataAwsccDynamodbGlobalTableReplicasTags <a name="DataAwsccDynamodbGlobalTableReplicasTags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags()
```


### DataAwsccDynamodbGlobalTableSseSpecification <a name="DataAwsccDynamodbGlobalTableSseSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification()
```


### DataAwsccDynamodbGlobalTableStreamSpecification <a name="DataAwsccDynamodbGlobalTableStreamSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification()
```


### DataAwsccDynamodbGlobalTableTimeToLiveSpecification <a name="DataAwsccDynamodbGlobalTableTimeToLiveSpecification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification()
```


### DataAwsccDynamodbGlobalTableWarmThroughput <a name="DataAwsccDynamodbGlobalTableWarmThroughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput()
```


### DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings <a name="DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings()
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings()
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings()
```


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDynamodbGlobalTableAttributeDefinitionsList <a name="DataAwsccDynamodbGlobalTableAttributeDefinitionsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference <a name="DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeType">attribute_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions">DataAwsccDynamodbGlobalTableAttributeDefinitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_type`<sup>Required</sup> <a name="attribute_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.attributeType"></a>

```python
attribute_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableAttributeDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableAttributeDefinitions">DataAwsccDynamodbGlobalTableAttributeDefinitions</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings">read_on_demand_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings">read_provisioned_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.warmThroughput">warm_throughput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeOnDemandThroughputSettings">write_on_demand_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeProvisionedThroughputSettings">write_provisioned_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.keySchema"></a>

```python
key_schema: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesKeySchemaList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.projection"></a>

```python
projection: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference</a>

---

##### `read_on_demand_throughput_settings`<sup>Required</sup> <a name="read_on_demand_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings"></a>

```python
read_on_demand_throughput_settings: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a>

---

##### `read_provisioned_throughput_settings`<sup>Required</sup> <a name="read_provisioned_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings"></a>

```python
read_provisioned_throughput_settings: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a>

---

##### `warm_throughput`<sup>Required</sup> <a name="warm_throughput" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.warmThroughput"></a>

```python
warm_throughput: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference</a>

---

##### `write_on_demand_throughput_settings`<sup>Required</sup> <a name="write_on_demand_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeOnDemandThroughputSettings"></a>

```python
write_on_demand_throughput_settings: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference</a>

---

##### `write_provisioned_throughput_settings`<sup>Required</sup> <a name="write_provisioned_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.writeProvisionedThroughputSettings"></a>

```python
write_provisioned_throughput_settings: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType">projection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `non_key_attributes`<sup>Required</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_read_request_units`<sup>Required</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_units_per_second`<sup>Required</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second`<sup>Required</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWarmThroughput</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits">max_write_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_write_request_units`<sup>Required</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits"></a>

```python
max_write_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings">write_capacity_auto_scaling_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `write_capacity_auto_scaling_settings`<sup>Required</sup> <a name="write_capacity_auto_scaling_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings"></a>

```python
write_capacity_auto_scaling_settings: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seed_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seed_capacity`<sup>Required</sup> <a name="seed_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```python
seed_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableGlobalSecondaryIndexesWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableGlobalTableWitnessesList <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnessesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference <a name="DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses">DataAwsccDynamodbGlobalTableGlobalTableWitnesses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnessesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableGlobalTableWitnesses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableGlobalTableWitnesses">DataAwsccDynamodbGlobalTableGlobalTableWitnesses</a>

---


### DataAwsccDynamodbGlobalTableKeySchemaList <a name="DataAwsccDynamodbGlobalTableKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema">DataAwsccDynamodbGlobalTableKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableKeySchema">DataAwsccDynamodbGlobalTableKeySchema</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchema</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.keySchema">key_schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.projection">projection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes">DataAwsccDynamodbGlobalTableLocalSecondaryIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `key_schema`<sup>Required</sup> <a name="key_schema" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.keySchema"></a>

```python
key_schema: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesKeySchemaList</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.projection"></a>

```python
projection: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableLocalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexes">DataAwsccDynamodbGlobalTableLocalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference <a name="DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes">non_key_attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType">projection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `non_key_attributes`<sup>Required</sup> <a name="non_key_attributes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.nonKeyAttributes"></a>

```python
non_key_attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `projection_type`<sup>Required</sup> <a name="projection_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.projectionType"></a>

```python
projection_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjectionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection">DataAwsccDynamodbGlobalTableLocalSecondaryIndexesProjection</a>

---


### DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_read_request_units`<sup>Required</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification">contributor_insights_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings">read_on_demand_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings">read_provisioned_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contributor_insights_specification`<sup>Required</sup> <a name="contributor_insights_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.contributorInsightsSpecification"></a>

```python
contributor_insights_specification: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesContributorInsightsSpecificationOutputReference</a>

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `read_on_demand_throughput_settings`<sup>Required</sup> <a name="read_on_demand_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readOnDemandThroughputSettings"></a>

```python
read_on_demand_throughput_settings: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference</a>

---

##### `read_provisioned_throughput_settings`<sup>Required</sup> <a name="read_provisioned_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.readProvisionedThroughputSettings"></a>

```python
read_provisioned_throughput_settings: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexes</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_read_request_units`<sup>Required</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings">read_capacity_auto_scaling_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_auto_scaling_settings`<sup>Required</sup> <a name="read_capacity_auto_scaling_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings"></a>

```python
read_capacity_auto_scaling_settings: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a>

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seed_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seed_capacity`<sup>Required</sup> <a name="seed_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```python
seed_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision">approximate_creation_date_time_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approximate_creation_date_time_precision`<sup>Required</sup> <a name="approximate_creation_date_time_precision" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.approximateCreationDateTimePrecision"></a>

```python
approximate_creation_date_time_precision: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasList <a name="DataAwsccDynamodbGlobalTableReplicasList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableReplicasOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.contributorInsightsSpecification">contributor_insights_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.deletionProtectionEnabled">deletion_protection_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalSecondaryIndexes">global_secondary_indexes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalTableSettingsReplicationMode">global_table_settings_replication_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.kinesisStreamSpecification">kinesis_stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.pointInTimeRecoverySpecification">point_in_time_recovery_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readOnDemandThroughputSettings">read_on_demand_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readProvisionedThroughputSettings">read_provisioned_throughput_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.replicaStreamSpecification">replica_stream_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.sseSpecification">sse_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tableClass">table_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList">DataAwsccDynamodbGlobalTableReplicasTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas">DataAwsccDynamodbGlobalTableReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `contributor_insights_specification`<sup>Required</sup> <a name="contributor_insights_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.contributorInsightsSpecification"></a>

```python
contributor_insights_specification: DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasContributorInsightsSpecificationOutputReference</a>

---

##### `deletion_protection_enabled`<sup>Required</sup> <a name="deletion_protection_enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.deletionProtectionEnabled"></a>

```python
deletion_protection_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `global_secondary_indexes`<sup>Required</sup> <a name="global_secondary_indexes" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalSecondaryIndexes"></a>

```python
global_secondary_indexes: DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList">DataAwsccDynamodbGlobalTableReplicasGlobalSecondaryIndexesList</a>

---

##### `global_table_settings_replication_mode`<sup>Required</sup> <a name="global_table_settings_replication_mode" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.globalTableSettingsReplicationMode"></a>

```python
global_table_settings_replication_mode: str
```

- *Type:* str

---

##### `kinesis_stream_specification`<sup>Required</sup> <a name="kinesis_stream_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.kinesisStreamSpecification"></a>

```python
kinesis_stream_specification: DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasKinesisStreamSpecificationOutputReference</a>

---

##### `point_in_time_recovery_specification`<sup>Required</sup> <a name="point_in_time_recovery_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.pointInTimeRecoverySpecification"></a>

```python
point_in_time_recovery_specification: DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference</a>

---

##### `read_on_demand_throughput_settings`<sup>Required</sup> <a name="read_on_demand_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readOnDemandThroughputSettings"></a>

```python
read_on_demand_throughput_settings: DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference</a>

---

##### `read_provisioned_throughput_settings`<sup>Required</sup> <a name="read_provisioned_throughput_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.readProvisionedThroughputSettings"></a>

```python
read_provisioned_throughput_settings: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replica_stream_specification`<sup>Required</sup> <a name="replica_stream_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.replicaStreamSpecification"></a>

```python
replica_stream_specification: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference</a>

---

##### `resource_policy`<sup>Required</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.resourcePolicy"></a>

```python
resource_policy: DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference</a>

---

##### `sse_specification`<sup>Required</sup> <a name="sse_specification" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.sseSpecification"></a>

```python
sse_specification: DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference">DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference</a>

---

##### `table_class`<sup>Required</sup> <a name="table_class" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tableClass"></a>

```python
table_class: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.tags"></a>

```python
tags: DataAwsccDynamodbGlobalTableReplicasTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList">DataAwsccDynamodbGlobalTableReplicasTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicas
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicas">DataAwsccDynamodbGlobalTableReplicas</a>

---


### DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled">point_in_time_recovery_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays">recovery_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `point_in_time_recovery_enabled`<sup>Required</sup> <a name="point_in_time_recovery_enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.pointInTimeRecoveryEnabled"></a>

```python
point_in_time_recovery_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `recovery_period_in_days`<sup>Required</sup> <a name="recovery_period_in_days" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.recoveryPeriodInDays"></a>

```python
recovery_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification">DataAwsccDynamodbGlobalTableReplicasPointInTimeRecoverySpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits">max_read_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_read_request_units`<sup>Required</sup> <a name="max_read_request_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.maxReadRequestUnits"></a>

```python
max_read_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings">read_capacity_auto_scaling_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits">read_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_capacity_auto_scaling_settings`<sup>Required</sup> <a name="read_capacity_auto_scaling_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityAutoScalingSettings"></a>

```python
read_capacity_auto_scaling_settings: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference</a>

---

##### `read_capacity_units`<sup>Required</sup> <a name="read_capacity_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.readCapacityUnits"></a>

```python
read_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seed_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seed_capacity`<sup>Required</sup> <a name="seed_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```python
seed_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableReplicasReadProvisionedThroughputSettingsReadCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.resourcePolicy">resource_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_policy`<sup>Required</sup> <a name="resource_policy" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.resourcePolicy"></a>

```python
resource_policy: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.tags"></a>

```python
tags: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationResourcePolicy</a>

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags">DataAwsccDynamodbGlobalTableReplicasReplicaStreamSpecificationTags</a>

---


### DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy">DataAwsccDynamodbGlobalTableReplicasResourcePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasResourcePolicy">DataAwsccDynamodbGlobalTableReplicasResourcePolicy</a>

---


### DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.kmsMasterKeyId">kms_master_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification">DataAwsccDynamodbGlobalTableReplicasSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_master_key_id`<sup>Required</sup> <a name="kms_master_key_id" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.kmsMasterKeyId"></a>

```python
kms_master_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasSseSpecification">DataAwsccDynamodbGlobalTableReplicasSseSpecification</a>

---


### DataAwsccDynamodbGlobalTableReplicasTagsList <a name="DataAwsccDynamodbGlobalTableReplicasTagsList" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDynamodbGlobalTableReplicasTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDynamodbGlobalTableReplicasTagsOutputReference <a name="DataAwsccDynamodbGlobalTableReplicasTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags">DataAwsccDynamodbGlobalTableReplicasTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableReplicasTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableReplicasTags">DataAwsccDynamodbGlobalTableReplicasTags</a>

---


### DataAwsccDynamodbGlobalTableSseSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseEnabled">sse_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseType">sse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification">DataAwsccDynamodbGlobalTableSseSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sse_enabled`<sup>Required</sup> <a name="sse_enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseEnabled"></a>

```python
sse_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `sse_type`<sup>Required</sup> <a name="sse_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.sseType"></a>

```python
sse_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableSseSpecification">DataAwsccDynamodbGlobalTableSseSpecification</a>

---


### DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.streamViewType">stream_view_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification">DataAwsccDynamodbGlobalTableStreamSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_view_type`<sup>Required</sup> <a name="stream_view_type" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.streamViewType"></a>

```python
stream_view_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableStreamSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableStreamSpecification">DataAwsccDynamodbGlobalTableStreamSpecification</a>

---


### DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference <a name="DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification">DataAwsccDynamodbGlobalTableTimeToLiveSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableTimeToLiveSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableTimeToLiveSpecification">DataAwsccDynamodbGlobalTableTimeToLiveSpecification</a>

---


### DataAwsccDynamodbGlobalTableWarmThroughputOutputReference <a name="DataAwsccDynamodbGlobalTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.readUnitsPerSecond">read_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.writeUnitsPerSecond">write_units_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput">DataAwsccDynamodbGlobalTableWarmThroughput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_units_per_second`<sup>Required</sup> <a name="read_units_per_second" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```python
read_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_units_per_second`<sup>Required</sup> <a name="write_units_per_second" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```python
write_units_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableWarmThroughput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWarmThroughput">DataAwsccDynamodbGlobalTableWarmThroughput</a>

---


### DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits">max_write_request_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_write_request_units`<sup>Required</sup> <a name="max_write_request_units" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.maxWriteRequestUnits"></a>

```python
max_write_request_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings">DataAwsccDynamodbGlobalTableWriteOnDemandThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings">write_capacity_auto_scaling_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `write_capacity_auto_scaling_settings`<sup>Required</sup> <a name="write_capacity_auto_scaling_settings" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.writeCapacityAutoScalingSettings"></a>

```python
write_capacity_auto_scaling_settings: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity">seed_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `seed_capacity`<sup>Required</sup> <a name="seed_capacity" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.seedCapacity"></a>

```python
seed_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettings</a>

---


### DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference <a name="DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dynamodb_global_table

dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDynamodbGlobalTable.DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration">DataAwsccDynamodbGlobalTableWriteProvisionedThroughputSettingsWriteCapacityAutoScalingSettingsTargetTrackingScalingPolicyConfiguration</a>

---



