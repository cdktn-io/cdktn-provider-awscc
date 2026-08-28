# `dataAwsccCasesLayout` Submodule <a name="`dataAwsccCasesLayout` Submodule" id="@cdktn/provider-awscc.dataAwsccCasesLayout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCasesLayout <a name="DataAwsccCasesLayout" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_layout awscc_cases_layout}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayout(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_layout#id DataAwsccCasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCasesLayout resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayout.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayout.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayout.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayout.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCasesLayout resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCasesLayout to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCasesLayout that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_layout#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCasesLayout to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference">DataAwsccCasesLayoutContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.layoutArn">layout_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.layoutId">layout_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList">DataAwsccCasesLayoutTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.content"></a>

```python
content: DataAwsccCasesLayoutContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference">DataAwsccCasesLayoutContentOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `layout_arn`<sup>Required</sup> <a name="layout_arn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.layoutArn"></a>

```python
layout_arn: str
```

- *Type:* str

---

##### `layout_id`<sup>Required</sup> <a name="layout_id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.layoutId"></a>

```python
layout_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.tags"></a>

```python
tags: DataAwsccCasesLayoutTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList">DataAwsccCasesLayoutTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayout.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCasesLayoutConfig <a name="DataAwsccCasesLayoutConfig" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cases_layout#id DataAwsccCasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCasesLayoutContent <a name="DataAwsccCasesLayoutContent" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContent()
```


### DataAwsccCasesLayoutContentBasic <a name="DataAwsccCasesLayoutContentBasic" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasic.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasic()
```


### DataAwsccCasesLayoutContentBasicMoreInfo <a name="DataAwsccCasesLayoutContentBasicMoreInfo" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfo()
```


### DataAwsccCasesLayoutContentBasicMoreInfoSections <a name="DataAwsccCasesLayoutContentBasicMoreInfoSections" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSections.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSections()
```


### DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup <a name="DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup()
```


### DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields <a name="DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields()
```


### DataAwsccCasesLayoutContentBasicTopPanel <a name="DataAwsccCasesLayoutContentBasicTopPanel" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanel()
```


### DataAwsccCasesLayoutContentBasicTopPanelSections <a name="DataAwsccCasesLayoutContentBasicTopPanelSections" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSections.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSections()
```


### DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup <a name="DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup()
```


### DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields <a name="DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields()
```


### DataAwsccCasesLayoutTags <a name="DataAwsccCasesLayoutTags" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCasesLayoutContentBasicMoreInfoOutputReference <a name="DataAwsccCasesLayoutContentBasicMoreInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList">DataAwsccCasesLayoutContentBasicMoreInfoSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfo">DataAwsccCasesLayoutContentBasicMoreInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.sections"></a>

```python
sections: DataAwsccCasesLayoutContentBasicMoreInfoSectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList">DataAwsccCasesLayoutContentBasicMoreInfoSectionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicMoreInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfo">DataAwsccCasesLayoutContentBasicMoreInfo</a>

---


### DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList <a name="DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference <a name="DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFields</a>

---


### DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference <a name="DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields"></a>

```python
fields: DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---


### DataAwsccCasesLayoutContentBasicMoreInfoSectionsList <a name="DataAwsccCasesLayoutContentBasicMoreInfoSectionsList" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference <a name="DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup">field_group</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSections">DataAwsccCasesLayoutContentBasicMoreInfoSections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_group`<sup>Required</sup> <a name="field_group" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup"></a>

```python
field_group: DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">DataAwsccCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicMoreInfoSections
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoSections">DataAwsccCasesLayoutContentBasicMoreInfoSections</a>

---


### DataAwsccCasesLayoutContentBasicOutputReference <a name="DataAwsccCasesLayoutContentBasicOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.moreInfo">more_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference">DataAwsccCasesLayoutContentBasicMoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.topPanel">top_panel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference">DataAwsccCasesLayoutContentBasicTopPanelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasic">DataAwsccCasesLayoutContentBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `more_info`<sup>Required</sup> <a name="more_info" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.moreInfo"></a>

```python
more_info: DataAwsccCasesLayoutContentBasicMoreInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicMoreInfoOutputReference">DataAwsccCasesLayoutContentBasicMoreInfoOutputReference</a>

---

##### `top_panel`<sup>Required</sup> <a name="top_panel" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.topPanel"></a>

```python
top_panel: DataAwsccCasesLayoutContentBasicTopPanelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference">DataAwsccCasesLayoutContentBasicTopPanelOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasic
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasic">DataAwsccCasesLayoutContentBasic</a>

---


### DataAwsccCasesLayoutContentBasicTopPanelOutputReference <a name="DataAwsccCasesLayoutContentBasicTopPanelOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.sections">sections</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList">DataAwsccCasesLayoutContentBasicTopPanelSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanel">DataAwsccCasesLayoutContentBasicTopPanel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sections`<sup>Required</sup> <a name="sections" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.sections"></a>

```python
sections: DataAwsccCasesLayoutContentBasicTopPanelSectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList">DataAwsccCasesLayoutContentBasicTopPanelSectionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicTopPanel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanel">DataAwsccCasesLayoutContentBasicTopPanel</a>

---


### DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList <a name="DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference <a name="DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFields</a>

---


### DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference <a name="DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields"></a>

```python
fields: DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---


### DataAwsccCasesLayoutContentBasicTopPanelSectionsList <a name="DataAwsccCasesLayoutContentBasicTopPanelSectionsList" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference <a name="DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup">field_group</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSections">DataAwsccCasesLayoutContentBasicTopPanelSections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_group`<sup>Required</sup> <a name="field_group" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup"></a>

```python
field_group: DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">DataAwsccCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContentBasicTopPanelSections
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicTopPanelSections">DataAwsccCasesLayoutContentBasicTopPanelSections</a>

---


### DataAwsccCasesLayoutContentOutputReference <a name="DataAwsccCasesLayoutContentOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference">DataAwsccCasesLayoutContentBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContent">DataAwsccCasesLayoutContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.basic"></a>

```python
basic: DataAwsccCasesLayoutContentBasicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentBasicOutputReference">DataAwsccCasesLayoutContentBasicOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutContent
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutContent">DataAwsccCasesLayoutContent</a>

---


### DataAwsccCasesLayoutTagsList <a name="DataAwsccCasesLayoutTagsList" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCasesLayoutTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCasesLayoutTagsOutputReference <a name="DataAwsccCasesLayoutTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cases_layout

dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTags">DataAwsccCasesLayoutTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCasesLayoutTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCasesLayout.DataAwsccCasesLayoutTags">DataAwsccCasesLayoutTags</a>

---



