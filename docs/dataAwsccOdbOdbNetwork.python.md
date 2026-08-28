# `dataAwsccOdbOdbNetwork` Submodule <a name="`dataAwsccOdbOdbNetwork` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbOdbNetwork <a name="DataAwsccOdbOdbNetwork" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_odb_network awscc_odb_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_odb_network#id DataAwsccOdbOdbNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOdbOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOdbOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOdbOdbNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOdbOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.backupSubnetCidr">backup_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.clientSubnetCidr">client_subnet_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.crossRegionS3RestoreSources">cross_region_s3_restore_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.customDomainName">custom_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.defaultDnsPrefix">default_dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.deleteAssociatedResources">delete_associated_resources</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ec2PlacementGroupIds">ec2_placement_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsAccess">kms_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.managedServices">managed_services</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference">DataAwsccOdbOdbNetworkManagedServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociNetworkAnchorId">oci_network_anchor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociVcnUrl">oci_vcn_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkArn">odb_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3Access">s3_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsAccess">sts_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList">DataAwsccOdbOdbNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.zeroEtlAccess">zero_etl_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `backup_subnet_cidr`<sup>Required</sup> <a name="backup_subnet_cidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.backupSubnetCidr"></a>

```python
backup_subnet_cidr: str
```

- *Type:* str

---

##### `client_subnet_cidr`<sup>Required</sup> <a name="client_subnet_cidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.clientSubnetCidr"></a>

```python
client_subnet_cidr: str
```

- *Type:* str

---

##### `cross_region_s3_restore_sources`<sup>Required</sup> <a name="cross_region_s3_restore_sources" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.crossRegionS3RestoreSources"></a>

```python
cross_region_s3_restore_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_domain_name`<sup>Required</sup> <a name="custom_domain_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.customDomainName"></a>

```python
custom_domain_name: str
```

- *Type:* str

---

##### `default_dns_prefix`<sup>Required</sup> <a name="default_dns_prefix" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.defaultDnsPrefix"></a>

```python
default_dns_prefix: str
```

- *Type:* str

---

##### `delete_associated_resources`<sup>Required</sup> <a name="delete_associated_resources" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.deleteAssociatedResources"></a>

```python
delete_associated_resources: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ec2_placement_group_ids`<sup>Required</sup> <a name="ec2_placement_group_ids" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ec2PlacementGroupIds"></a>

```python
ec2_placement_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_access`<sup>Required</sup> <a name="kms_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsAccess"></a>

```python
kms_access: str
```

- *Type:* str

---

##### `kms_policy_document`<sup>Required</sup> <a name="kms_policy_document" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

---

##### `managed_services`<sup>Required</sup> <a name="managed_services" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.managedServices"></a>

```python
managed_services: DataAwsccOdbOdbNetworkManagedServicesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference">DataAwsccOdbOdbNetworkManagedServicesOutputReference</a>

---

##### `oci_network_anchor_id`<sup>Required</sup> <a name="oci_network_anchor_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociNetworkAnchorId"></a>

```python
oci_network_anchor_id: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_vcn_url`<sup>Required</sup> <a name="oci_vcn_url" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociVcnUrl"></a>

```python
oci_vcn_url: str
```

- *Type:* str

---

##### `odb_network_arn`<sup>Required</sup> <a name="odb_network_arn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkArn"></a>

```python
odb_network_arn: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3Access"></a>

```python
s3_access: str
```

- *Type:* str

---

##### `s3_policy_document`<sup>Required</sup> <a name="s3_policy_document" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

---

##### `sts_access`<sup>Required</sup> <a name="sts_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsAccess"></a>

```python
sts_access: str
```

- *Type:* str

---

##### `sts_policy_document`<sup>Required</sup> <a name="sts_policy_document" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tags"></a>

```python
tags: DataAwsccOdbOdbNetworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList">DataAwsccOdbOdbNetworkTagsList</a>

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.zeroEtlAccess"></a>

```python
zero_etl_access: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbOdbNetworkConfig <a name="DataAwsccOdbOdbNetworkConfig" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_odb_network#id DataAwsccOdbOdbNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbOdbNetworkManagedServices <a name="DataAwsccOdbOdbNetworkManagedServices" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices()
```


### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess()
```


### DataAwsccOdbOdbNetworkManagedServicesKmsAccess <a name="DataAwsccOdbOdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess()
```


### DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess <a name="DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess()
```


### DataAwsccOdbOdbNetworkManagedServicesS3Access <a name="DataAwsccOdbOdbNetworkManagedServicesS3Access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access()
```


### DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint <a name="DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint()
```


### DataAwsccOdbOdbNetworkManagedServicesStsAccess <a name="DataAwsccOdbOdbNetworkManagedServicesStsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess()
```


### DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess <a name="DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess()
```


### DataAwsccOdbOdbNetworkTags <a name="DataAwsccOdbOdbNetworkTags" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">kms_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess">DataAwsccOdbOdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_policy_document`<sup>Required</sup> <a name="kms_policy_document" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```python
kms_policy_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServicesKmsAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess">DataAwsccOdbOdbNetworkManagedServicesKmsAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess">cross_region_s3_restore_sources_access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.kmsAccess">kms_access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">managed_s3_backup_access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs">managed_services_ipv4_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">resource_gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.s3Access">s3_access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">service_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">service_network_endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.stsAccess">sts_access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">zero_etl_access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices">DataAwsccOdbOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cross_region_s3_restore_sources_access`<sup>Required</sup> <a name="cross_region_s3_restore_sources_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess"></a>

```python
cross_region_s3_restore_sources_access: DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a>

---

##### `kms_access`<sup>Required</sup> <a name="kms_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```python
kms_access: DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference</a>

---

##### `managed_s3_backup_access`<sup>Required</sup> <a name="managed_s3_backup_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```python
managed_s3_backup_access: DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a>

---

##### `managed_services_ipv4_cidrs`<sup>Required</sup> <a name="managed_services_ipv4_cidrs" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs"></a>

```python
managed_services_ipv4_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_gateway_arn`<sup>Required</sup> <a name="resource_gateway_arn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```python
resource_gateway_arn: str
```

- *Type:* str

---

##### `s3_access`<sup>Required</sup> <a name="s3_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```python
s3_access: DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference</a>

---

##### `service_network_arn`<sup>Required</sup> <a name="service_network_arn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```python
service_network_arn: str
```

- *Type:* str

---

##### `service_network_endpoint`<sup>Required</sup> <a name="service_network_endpoint" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```python
service_network_endpoint: DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a>

---

##### `sts_access`<sup>Required</sup> <a name="sts_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```python
sts_access: DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference</a>

---

##### `zero_etl_access`<sup>Required</sup> <a name="zero_etl_access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```python
zero_etl_access: DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServices
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices">DataAwsccOdbOdbNetworkManagedServices</a>

---


### DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">s3_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access">DataAwsccOdbOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `s3_policy_document`<sup>Required</sup> <a name="s3_policy_document" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```python
s3_policy_document: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServicesS3Access
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access">DataAwsccOdbOdbNetworkManagedServicesS3Access</a>

---


### DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">vpc_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_endpoint_type`<sup>Required</sup> <a name="vpc_endpoint_type" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```python
vpc_endpoint_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">sts_policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess">DataAwsccOdbOdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `ipv4_addresses`<sup>Required</sup> <a name="ipv4_addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```python
ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `sts_policy_document`<sup>Required</sup> <a name="sts_policy_document" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```python
sts_policy_document: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServicesStsAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess">DataAwsccOdbOdbNetworkManagedServicesStsAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess</a>

---


### DataAwsccOdbOdbNetworkTagsList <a name="DataAwsccOdbOdbNetworkTagsList" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbOdbNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbOdbNetworkTagsOutputReference <a name="DataAwsccOdbOdbNetworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_odb_network

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags">DataAwsccOdbOdbNetworkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbOdbNetworkTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags">DataAwsccOdbOdbNetworkTags</a>

---



