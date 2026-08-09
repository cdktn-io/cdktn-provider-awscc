# `dataAwsccQuicksightAgent` Submodule <a name="`dataAwsccQuicksightAgent` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightAgent <a name="DataAwsccQuicksightAgent" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_agent awscc_quicksight_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgent(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_agent#id DataAwsccQuicksightAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightAgent resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQuicksightAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQuicksightAgent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQuicksightAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.actionConnectors">action_connectors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentLifecycle">agent_lifecycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentStatus">agent_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInput">custom_prompt_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference">DataAwsccQuicksightAgentCustomPromptInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInterface">custom_prompt_interface</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference">DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.iconId">icon_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.spaces">spaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.starterPrompts">starter_prompts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList">DataAwsccQuicksightAgentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.welcomeMessage">welcome_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `action_connectors`<sup>Required</sup> <a name="action_connectors" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.actionConnectors"></a>

```python
action_connectors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `agent_lifecycle`<sup>Required</sup> <a name="agent_lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentLifecycle"></a>

```python
agent_lifecycle: str
```

- *Type:* str

---

##### `agent_status`<sup>Required</sup> <a name="agent_status" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.agentStatus"></a>

```python
agent_status: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `custom_prompt_input`<sup>Required</sup> <a name="custom_prompt_input" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInput"></a>

```python
custom_prompt_input: DataAwsccQuicksightAgentCustomPromptInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference">DataAwsccQuicksightAgentCustomPromptInputOutputReference</a>

---

##### `custom_prompt_interface`<sup>Required</sup> <a name="custom_prompt_interface" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.customPromptInterface"></a>

```python
custom_prompt_interface: DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference">DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `icon_id`<sup>Required</sup> <a name="icon_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.iconId"></a>

```python
icon_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spaces`<sup>Required</sup> <a name="spaces" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.spaces"></a>

```python
spaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starter_prompts`<sup>Required</sup> <a name="starter_prompts" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.starterPrompts"></a>

```python
starter_prompts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tags"></a>

```python
tags: DataAwsccQuicksightAgentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList">DataAwsccQuicksightAgentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `welcome_message`<sup>Required</sup> <a name="welcome_message" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.welcomeMessage"></a>

```python
welcome_message: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightAgentConfig <a name="DataAwsccQuicksightAgentConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/quicksight_agent#id DataAwsccQuicksightAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightAgentCustomPromptInput <a name="DataAwsccQuicksightAgentCustomPromptInput" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput()
```


### DataAwsccQuicksightAgentCustomPromptInputExistingPrompt <a name="DataAwsccQuicksightAgentCustomPromptInputExistingPrompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt()
```


### DataAwsccQuicksightAgentCustomPromptInputNewPrompt <a name="DataAwsccQuicksightAgentCustomPromptInputNewPrompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt()
```


### DataAwsccQuicksightAgentCustomPromptInterface <a name="DataAwsccQuicksightAgentCustomPromptInterface" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface()
```


### DataAwsccQuicksightAgentTags <a name="DataAwsccQuicksightAgentTags" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId">model_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId">qbs_aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt">DataAwsccQuicksightAgentCustomPromptInputExistingPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_profile_id`<sup>Required</sup> <a name="model_profile_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.modelProfileId"></a>

```python
model_profile_id: str
```

- *Type:* str

---

##### `qbs_aws_account_id`<sup>Required</sup> <a name="qbs_aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.qbsAwsAccountId"></a>

```python
qbs_aws_account_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightAgentCustomPromptInputExistingPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPrompt">DataAwsccQuicksightAgentCustomPromptInputExistingPrompt</a>

---


### DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions">custom_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle">output_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength">response_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone">tone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt">DataAwsccQuicksightAgentCustomPromptInputNewPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_instructions`<sup>Required</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.customInstructions"></a>

```python
custom_instructions: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `output_style`<sup>Required</sup> <a name="output_style" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.outputStyle"></a>

```python
output_style: str
```

- *Type:* str

---

##### `response_length`<sup>Required</sup> <a name="response_length" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.responseLength"></a>

```python
response_length: str
```

- *Type:* str

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.tone"></a>

```python
tone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightAgentCustomPromptInputNewPrompt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPrompt">DataAwsccQuicksightAgentCustomPromptInputNewPrompt</a>

---


### DataAwsccQuicksightAgentCustomPromptInputOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInputOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.existingPrompt">existing_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.newPrompt">new_prompt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput">DataAwsccQuicksightAgentCustomPromptInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `existing_prompt`<sup>Required</sup> <a name="existing_prompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.existingPrompt"></a>

```python
existing_prompt: DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputExistingPromptOutputReference</a>

---

##### `new_prompt`<sup>Required</sup> <a name="new_prompt" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.newPrompt"></a>

```python
new_prompt: DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference">DataAwsccQuicksightAgentCustomPromptInputNewPromptOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightAgentCustomPromptInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInput">DataAwsccQuicksightAgentCustomPromptInput</a>

---


### DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference <a name="DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions">custom_instructions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId">model_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle">output_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary">prompt_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId">qbs_aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength">response_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.tone">tone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface">DataAwsccQuicksightAgentCustomPromptInterface</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_instructions`<sup>Required</sup> <a name="custom_instructions" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.customInstructions"></a>

```python
custom_instructions: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `model_profile_id`<sup>Required</sup> <a name="model_profile_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.modelProfileId"></a>

```python
model_profile_id: str
```

- *Type:* str

---

##### `output_style`<sup>Required</sup> <a name="output_style" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.outputStyle"></a>

```python
output_style: str
```

- *Type:* str

---

##### `prompt_summary`<sup>Required</sup> <a name="prompt_summary" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.promptSummary"></a>

```python
prompt_summary: str
```

- *Type:* str

---

##### `qbs_aws_account_id`<sup>Required</sup> <a name="qbs_aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.qbsAwsAccountId"></a>

```python
qbs_aws_account_id: str
```

- *Type:* str

---

##### `response_length`<sup>Required</sup> <a name="response_length" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.responseLength"></a>

```python
response_length: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tone`<sup>Required</sup> <a name="tone" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.tone"></a>

```python
tone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterfaceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightAgentCustomPromptInterface
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentCustomPromptInterface">DataAwsccQuicksightAgentCustomPromptInterface</a>

---


### DataAwsccQuicksightAgentTagsList <a name="DataAwsccQuicksightAgentTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightAgentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightAgentTagsOutputReference <a name="DataAwsccQuicksightAgentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_agent

dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags">DataAwsccQuicksightAgentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightAgentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightAgent.DataAwsccQuicksightAgentTags">DataAwsccQuicksightAgentTags</a>

---



