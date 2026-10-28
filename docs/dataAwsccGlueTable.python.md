# `dataAwsccGlueTable` Submodule <a name="`dataAwsccGlueTable` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueTable <a name="DataAwsccGlueTable" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/glue_table awscc_glue_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTable(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/glue_table#id DataAwsccGlueTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlueTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTable.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlueTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlueTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlueTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/glue_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.openTableFormatInput">open_table_format_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference">DataAwsccGlueTableOpenTableFormatInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tableInput">table_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference">DataAwsccGlueTableTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_table_format_input`<sup>Required</sup> <a name="open_table_format_input" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.openTableFormatInput"></a>

```python
open_table_format_input: DataAwsccGlueTableOpenTableFormatInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference">DataAwsccGlueTableOpenTableFormatInputOutputReference</a>

---

##### `table_input`<sup>Required</sup> <a name="table_input" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tableInput"></a>

```python
table_input: DataAwsccGlueTableTableInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference">DataAwsccGlueTableTableInputOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueTableConfig <a name="DataAwsccGlueTableConfig" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/glue_table#id DataAwsccGlueTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueTableOpenTableFormatInput <a name="DataAwsccGlueTableOpenTableFormatInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInput <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder()
```


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields()
```


### DataAwsccGlueTableTableInput <a name="DataAwsccGlueTableTableInput" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInput()
```


### DataAwsccGlueTableTableInputPartitionKeys <a name="DataAwsccGlueTableTableInputPartitionKeys" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys()
```


### DataAwsccGlueTableTableInputStorageDescriptor <a name="DataAwsccGlueTableTableInputStorageDescriptor" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor()
```


### DataAwsccGlueTableTableInputStorageDescriptorColumns <a name="DataAwsccGlueTableTableInputStorageDescriptorColumns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns()
```


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference()
```


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId()
```


### DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo <a name="DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo()
```


### DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo <a name="DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo()
```


### DataAwsccGlueTableTableInputStorageDescriptorSortColumns <a name="DataAwsccGlueTableTableInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns()
```


### DataAwsccGlueTableTableInputTargetTable <a name="DataAwsccGlueTableTableInputTargetTable" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable()
```


### DataAwsccGlueTableTableInputViewDefinition <a name="DataAwsccGlueTableTableInputViewDefinition" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition()
```


### DataAwsccGlueTableTableInputViewDefinitionRepresentations <a name="DataAwsccGlueTableTableInputViewDefinitionRepresentations" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec">partition_spec</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties">properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder">write_order</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `partition_spec`<sup>Required</sup> <a name="partition_spec" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec"></a>

```python
partition_spec: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties"></a>

```python
properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema"></a>

```python
schema: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a>

---

##### `write_order`<sup>Required</sup> <a name="write_order" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.writeOrder"></a>

```python
write_order: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields"></a>

```python
fields: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a>

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc"></a>

```python
doc: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required"></a>

```python
required: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds">identifier_field_ids</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId">schema_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields"></a>

```python
fields: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a>

---

##### `identifier_field_ids`<sup>Required</sup> <a name="identifier_field_ids" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds"></a>

```python
identifier_field_ids: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId"></a>

```python
schema_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder">null_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `null_order`<sup>Required</sup> <a name="null_order" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.nullOrder"></a>

```python
null_order: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFields</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId">order_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.fields"></a>

```python
fields: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderFieldsList</a>

---

##### `order_id`<sup>Required</sup> <a name="order_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.orderId"></a>

```python
order_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrderOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputWriteOrder</a>

---


### DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput">iceberg_table_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation">metadata_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput">DataAwsccGlueTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_table_input`<sup>Required</sup> <a name="iceberg_table_input" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput"></a>

```python
iceberg_table_input: DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a>

---

##### `metadata_operation`<sup>Required</sup> <a name="metadata_operation" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation"></a>

```python
metadata_operation: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInputIcebergInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInput">DataAwsccGlueTableOpenTableFormatInputIcebergInput</a>

---


### DataAwsccGlueTableOpenTableFormatInputOutputReference <a name="DataAwsccGlueTableOpenTableFormatInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.icebergInput">iceberg_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput">DataAwsccGlueTableOpenTableFormatInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iceberg_input`<sup>Required</sup> <a name="iceberg_input" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.icebergInput"></a>

```python
iceberg_input: DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference">DataAwsccGlueTableOpenTableFormatInputIcebergInputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableOpenTableFormatInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableOpenTableFormatInput">DataAwsccGlueTableOpenTableFormatInput</a>

---


### DataAwsccGlueTableTableInputOutputReference <a name="DataAwsccGlueTableTableInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.partitionKeys">partition_keys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList">DataAwsccGlueTableTableInputPartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.retention">retention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.storageDescriptor">storage_descriptor</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference">DataAwsccGlueTableTableInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.tableType">table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.targetTable">target_table</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference">DataAwsccGlueTableTableInputTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewDefinition">view_definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference">DataAwsccGlueTableTableInputViewDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput">DataAwsccGlueTableTableInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `partition_keys`<sup>Required</sup> <a name="partition_keys" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.partitionKeys"></a>

```python
partition_keys: DataAwsccGlueTableTableInputPartitionKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList">DataAwsccGlueTableTableInputPartitionKeysList</a>

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.retention"></a>

```python
retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_descriptor`<sup>Required</sup> <a name="storage_descriptor" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.storageDescriptor"></a>

```python
storage_descriptor: DataAwsccGlueTableTableInputStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference">DataAwsccGlueTableTableInputStorageDescriptorOutputReference</a>

---

##### `table_type`<sup>Required</sup> <a name="table_type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.tableType"></a>

```python
table_type: str
```

- *Type:* str

---

##### `target_table`<sup>Required</sup> <a name="target_table" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.targetTable"></a>

```python
target_table: DataAwsccGlueTableTableInputTargetTableOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference">DataAwsccGlueTableTableInputTargetTableOutputReference</a>

---

##### `view_definition`<sup>Required</sup> <a name="view_definition" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewDefinition"></a>

```python
view_definition: DataAwsccGlueTableTableInputViewDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference">DataAwsccGlueTableTableInputViewDefinitionOutputReference</a>

---

##### `view_expanded_text`<sup>Required</sup> <a name="view_expanded_text" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

---

##### `view_original_text`<sup>Required</sup> <a name="view_original_text" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInput">DataAwsccGlueTableTableInput</a>

---


### DataAwsccGlueTableTableInputPartitionKeysList <a name="DataAwsccGlueTableTableInputPartitionKeysList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueTableTableInputPartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueTableTableInputPartitionKeysOutputReference <a name="DataAwsccGlueTableTableInputPartitionKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys">DataAwsccGlueTableTableInputPartitionKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputPartitionKeys
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputPartitionKeys">DataAwsccGlueTableTableInputPartitionKeys</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorColumnsList <a name="DataAwsccGlueTableTableInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns">DataAwsccGlueTableTableInputStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputStorageDescriptorColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumns">DataAwsccGlueTableTableInputStorageDescriptorColumns</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns">bucket_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList">DataAwsccGlueTableTableInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.inputFormat">input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets">number_of_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.outputFormat">output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.schemaReference">schema_reference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo">serde_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo">skewed_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.sortColumns">sort_columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList">DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories">stored_as_sub_directories</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor">DataAwsccGlueTableTableInputStorageDescriptor</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_columns`<sup>Required</sup> <a name="bucket_columns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```python
bucket_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.columns"></a>

```python
columns: DataAwsccGlueTableTableInputStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorColumnsList">DataAwsccGlueTableTableInputStorageDescriptorColumnsList</a>

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.compressed"></a>

```python
compressed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `input_format`<sup>Required</sup> <a name="input_format" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.inputFormat"></a>

```python
input_format: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `number_of_buckets`<sup>Required</sup> <a name="number_of_buckets" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```python
number_of_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `output_format`<sup>Required</sup> <a name="output_format" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.outputFormat"></a>

```python
output_format: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `schema_reference`<sup>Required</sup> <a name="schema_reference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.schemaReference"></a>

```python
schema_reference: DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serde_info`<sup>Required</sup> <a name="serde_info" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```python
serde_info: DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `skewed_info`<sup>Required</sup> <a name="skewed_info" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```python
skewed_info: DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sort_columns`<sup>Required</sup> <a name="sort_columns" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.sortColumns"></a>

```python
sort_columns: DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList">DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList</a>

---

##### `stored_as_sub_directories`<sup>Required</sup> <a name="stored_as_sub_directories" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```python
stored_as_sub_directories: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptor">DataAwsccGlueTableTableInputStorageDescriptor</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schema_id</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schema_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schema_version_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```python
schema_id: DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schema_version_id`<sup>Required</sup> <a name="schema_version_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```python
schema_version_id: str
```

- *Type:* str

---

##### `schema_version_number`<sup>Required</sup> <a name="schema_version_number" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```python
schema_version_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReference">DataAwsccGlueTableTableInputStorageDescriptorSchemaReference</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registry_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schema_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `registry_name`<sup>Required</sup> <a name="registry_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```python
registry_name: str
```

- *Type:* str

---

##### `schema_arn`<sup>Required</sup> <a name="schema_arn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```python
schema_arn: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId">DataAwsccGlueTableTableInputStorageDescriptorSchemaReferenceSchemaId</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">serialization_library</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `serialization_library`<sup>Required</sup> <a name="serialization_library" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```python
serialization_library: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo">DataAwsccGlueTableTableInputStorageDescriptorSerdeInfo</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewed_column_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewed_column_value_location_maps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewed_column_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `skewed_column_names`<sup>Required</sup> <a name="skewed_column_names" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```python
skewed_column_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skewed_column_value_location_maps`<sup>Required</sup> <a name="skewed_column_value_location_maps" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```python
skewed_column_value_location_maps: str
```

- *Type:* str

---

##### `skewed_column_values`<sup>Required</sup> <a name="skewed_column_values" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```python
skewed_column_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo">DataAwsccGlueTableTableInputStorageDescriptorSkewedInfo</a>

---


### DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList <a name="DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference <a name="DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">sort_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns">DataAwsccGlueTableTableInputStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```python
sort_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputStorageDescriptorSortColumns
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputStorageDescriptorSortColumns">DataAwsccGlueTableTableInputStorageDescriptorSortColumns</a>

---


### DataAwsccGlueTableTableInputTargetTableOutputReference <a name="DataAwsccGlueTableTableInputTargetTableOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable">DataAwsccGlueTableTableInputTargetTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTableOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputTargetTable
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputTargetTable">DataAwsccGlueTableTableInputTargetTable</a>

---


### DataAwsccGlueTableTableInputViewDefinitionOutputReference <a name="DataAwsccGlueTableTableInputViewDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.definer">definer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.isProtected">is_protected</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.representations">representations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList">DataAwsccGlueTableTableInputViewDefinitionRepresentationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.subObjects">sub_objects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition">DataAwsccGlueTableTableInputViewDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `definer`<sup>Required</sup> <a name="definer" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.definer"></a>

```python
definer: str
```

- *Type:* str

---

##### `is_protected`<sup>Required</sup> <a name="is_protected" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.isProtected"></a>

```python
is_protected: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `representations`<sup>Required</sup> <a name="representations" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.representations"></a>

```python
representations: DataAwsccGlueTableTableInputViewDefinitionRepresentationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList">DataAwsccGlueTableTableInputViewDefinitionRepresentationsList</a>

---

##### `sub_objects`<sup>Required</sup> <a name="sub_objects" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.subObjects"></a>

```python
sub_objects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputViewDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinition">DataAwsccGlueTableTableInputViewDefinition</a>

---


### DataAwsccGlueTableTableInputViewDefinitionRepresentationsList <a name="DataAwsccGlueTableTableInputViewDefinitionRepresentationsList" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference <a name="DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_glue_table

dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect">dialect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion">dialect_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection">validation_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText">view_expanded_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText">view_original_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations">DataAwsccGlueTableTableInputViewDefinitionRepresentations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dialect`<sup>Required</sup> <a name="dialect" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialect"></a>

```python
dialect: str
```

- *Type:* str

---

##### `dialect_version`<sup>Required</sup> <a name="dialect_version" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.dialectVersion"></a>

```python
dialect_version: str
```

- *Type:* str

---

##### `validation_connection`<sup>Required</sup> <a name="validation_connection" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.validationConnection"></a>

```python
validation_connection: str
```

- *Type:* str

---

##### `view_expanded_text`<sup>Required</sup> <a name="view_expanded_text" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewExpandedText"></a>

```python
view_expanded_text: str
```

- *Type:* str

---

##### `view_original_text`<sup>Required</sup> <a name="view_original_text" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.viewOriginalText"></a>

```python
view_original_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlueTableTableInputViewDefinitionRepresentations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTable.DataAwsccGlueTableTableInputViewDefinitionRepresentations">DataAwsccGlueTableTableInputViewDefinitionRepresentations</a>

---



