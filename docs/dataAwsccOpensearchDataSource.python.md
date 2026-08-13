# `dataAwsccOpensearchDataSource` Submodule <a name="`dataAwsccOpensearchDataSource` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchDataSource <a name="DataAwsccOpensearchDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearch_data_source awscc_opensearch_data_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearch_data_source#id DataAwsccOpensearchDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchDataSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOpensearchDataSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOpensearchDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOpensearchDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearch_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.dataSourceType">data_source_type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference">DataAwsccOpensearchDataSourceDataSourceTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_source_type`<sup>Required</sup> <a name="data_source_type" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.dataSourceType"></a>

```python
data_source_type: DataAwsccOpensearchDataSourceDataSourceTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference">DataAwsccOpensearchDataSourceDataSourceTypeOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchDataSourceConfig <a name="DataAwsccOpensearchDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/opensearch_data_source#id DataAwsccOpensearchDataSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchDataSourceDataSourceType <a name="DataAwsccOpensearchDataSourceDataSourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceType.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceType()
```


### DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog <a name="DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchDataSourceDataSourceTypeOutputReference <a name="DataAwsccOpensearchDataSourceDataSourceTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.s3GlueDataCatalog">s3_glue_data_catalog</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference">DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceType">DataAwsccOpensearchDataSourceDataSourceType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_glue_data_catalog`<sup>Required</sup> <a name="s3_glue_data_catalog" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.s3GlueDataCatalog"></a>

```python
s3_glue_data_catalog: DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference">DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchDataSourceDataSourceType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceType">DataAwsccOpensearchDataSourceDataSourceType</a>

---


### DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference <a name="DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_opensearch_data_source

dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog">DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalogOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchDataSource.DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog">DataAwsccOpensearchDataSourceDataSourceTypeS3GlueDataCatalog</a>

---



