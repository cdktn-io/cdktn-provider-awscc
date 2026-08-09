# `dataAwsccDatazoneConnection` Submodule <a name="`dataAwsccDatazoneConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneConnection <a name="DataAwsccDatazoneConnection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_connection awscc_datazone_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_connection#id DataAwsccDatazoneConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatazoneConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatazoneConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatazoneConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.awsLocation">aws_location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference">DataAwsccDatazoneConnectionAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.configurations">configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList">DataAwsccDatazoneConnectionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainUnitId">domain_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.enableTrustedIdentityPropagation">enable_trusted_identity_propagation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentUserRole">environment_user_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference">DataAwsccDatazoneConnectionPropsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `aws_location`<sup>Required</sup> <a name="aws_location" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.awsLocation"></a>

```python
aws_location: DataAwsccDatazoneConnectionAwsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference">DataAwsccDatazoneConnectionAwsLocationOutputReference</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.configurations"></a>

```python
configurations: DataAwsccDatazoneConnectionConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList">DataAwsccDatazoneConnectionConfigurationsList</a>

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `domain_unit_id`<sup>Required</sup> <a name="domain_unit_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.domainUnitId"></a>

```python
domain_unit_id: str
```

- *Type:* str

---

##### `enable_trusted_identity_propagation`<sup>Required</sup> <a name="enable_trusted_identity_propagation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.enableTrustedIdentityPropagation"></a>

```python
enable_trusted_identity_propagation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `environment_user_role`<sup>Required</sup> <a name="environment_user_role" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.environmentUserRole"></a>

```python
environment_user_role: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

---

##### `props`<sup>Required</sup> <a name="props" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.props"></a>

```python
props: DataAwsccDatazoneConnectionPropsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference">DataAwsccDatazoneConnectionPropsOutputReference</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneConnectionAwsLocation <a name="DataAwsccDatazoneConnectionAwsLocation" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation()
```


### DataAwsccDatazoneConnectionConfig <a name="DataAwsccDatazoneConnectionConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_connection#id DataAwsccDatazoneConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneConnectionConfigurations <a name="DataAwsccDatazoneConnectionConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations()
```


### DataAwsccDatazoneConnectionProps <a name="DataAwsccDatazoneConnectionProps" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps()
```


### DataAwsccDatazoneConnectionPropsAmazonQProperties <a name="DataAwsccDatazoneConnectionPropsAmazonQProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties()
```


### DataAwsccDatazoneConnectionPropsAthenaProperties <a name="DataAwsccDatazoneConnectionPropsAthenaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties()
```


### DataAwsccDatazoneConnectionPropsGlueProperties <a name="DataAwsccDatazoneConnectionPropsGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials()
```


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements()
```


### DataAwsccDatazoneConnectionPropsHyperPodProperties <a name="DataAwsccDatazoneConnectionPropsHyperPodProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties()
```


### DataAwsccDatazoneConnectionPropsIamProperties <a name="DataAwsccDatazoneConnectionPropsIamProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties()
```


### DataAwsccDatazoneConnectionPropsLakehouseProperties <a name="DataAwsccDatazoneConnectionPropsLakehouseProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties()
```


### DataAwsccDatazoneConnectionPropsMlflowProperties <a name="DataAwsccDatazoneConnectionPropsMlflowProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties()
```


### DataAwsccDatazoneConnectionPropsRedshiftProperties <a name="DataAwsccDatazoneConnectionPropsRedshiftProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties()
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials()
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword()
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync()
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule()
```


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage()
```


### DataAwsccDatazoneConnectionPropsS3Properties <a name="DataAwsccDatazoneConnectionPropsS3Properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties()
```


### DataAwsccDatazoneConnectionPropsSparkEmrProperties <a name="DataAwsccDatazoneConnectionPropsSparkEmrProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties()
```


### DataAwsccDatazoneConnectionPropsSparkGlueProperties <a name="DataAwsccDatazoneConnectionPropsSparkGlueProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties()
```


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs()
```


### DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties <a name="DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneConnectionAwsLocationOutputReference <a name="DataAwsccDatazoneConnectionAwsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.accessRole">access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.iamConnectionId">iam_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation">DataAwsccDatazoneConnectionAwsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `iam_connection_id`<sup>Required</sup> <a name="iam_connection_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.iamConnectionId"></a>

```python
iam_connection_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionAwsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionAwsLocation">DataAwsccDatazoneConnectionAwsLocation</a>

---


### DataAwsccDatazoneConnectionConfigurationsList <a name="DataAwsccDatazoneConnectionConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatazoneConnectionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatazoneConnectionConfigurationsOutputReference <a name="DataAwsccDatazoneConnectionConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.properties">properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations">DataAwsccDatazoneConnectionConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.properties"></a>

```python
properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionConfigurations">DataAwsccDatazoneConnectionConfigurations</a>

---


### DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode">auth_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn">profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties">DataAwsccDatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `profile_arn`<sup>Required</sup> <a name="profile_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn"></a>

```python
profile_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsAmazonQProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQProperties">DataAwsccDatazoneConnectionPropsAmazonQProperties</a>

---


### DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties">DataAwsccDatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsAthenaProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaProperties">DataAwsccDatazoneConnectionPropsAthenaProperties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorization_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code`<sup>Required</sup> <a name="authorization_code" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```python
authorization_code: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">aws_managed_client_application_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">user_managed_client_application_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_managed_client_application_reference`<sup>Required</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```python
aws_managed_client_application_reference: str
```

- *Type:* str

---

##### `user_managed_client_application_client_id`<sup>Required</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```python
user_managed_client_application_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">jwt_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">user_managed_client_application_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `jwt_token`<sup>Required</sup> <a name="jwt_token" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```python
jwt_token: str
```

- *Type:* str

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

---

##### `user_managed_client_application_client_secret`<sup>Required</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```python
user_managed_client_application_client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">authorization_code_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">o_auth2_client_application</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">o_auth2_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">o_auth2_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">token_url_parameters_map</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_properties`<sup>Required</sup> <a name="authorization_code_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```python
authorization_code_properties: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `o_auth2_client_application`<sup>Required</sup> <a name="o_auth2_client_application" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```python
o_auth2_client_application: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `o_auth2_credentials`<sup>Required</sup> <a name="o_auth2_credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```python
o_auth2_credentials: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `o_auth2_grant_type`<sup>Required</sup> <a name="o_auth2_grant_type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```python
o_auth2_grant_type: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `token_url_parameters_map`<sup>Required</sup> <a name="token_url_parameters_map" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```python
token_url_parameters_map: StringMap
```

- *Type:* cdktn.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basic_authentication_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">custom_authentication_credentials</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">o_auth2_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `basic_authentication_credentials`<sup>Required</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```python
basic_authentication_credentials: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `custom_authentication_credentials`<sup>Required</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```python
custom_authentication_credentials: StringMap
```

- *Type:* cdktn.StringMap

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `o_auth2_properties`<sup>Required</sup> <a name="o_auth2_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```python
o_auth2_properties: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties">athena_properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties">connection_properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria">match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties">python_properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties">spark_properties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials">validate_credentials</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments">validate_for_compute_environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `athena_properties`<sup>Required</sup> <a name="athena_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties"></a>

```python
athena_properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration"></a>

```python
authentication_configuration: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `connection_properties`<sup>Required</sup> <a name="connection_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties"></a>

```python
connection_properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria"></a>

```python
match_criteria: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `physical_connection_requirements`<sup>Required</sup> <a name="physical_connection_requirements" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```python
physical_connection_requirements: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `python_properties`<sup>Required</sup> <a name="python_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties"></a>

```python
python_properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `spark_properties`<sup>Required</sup> <a name="spark_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties"></a>

```python
spark_properties: StringMap
```

- *Type:* cdktn.StringMap

---

##### `validate_credentials`<sup>Required</sup> <a name="validate_credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials"></a>

```python
validate_credentials: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `validate_for_compute_environments`<sup>Required</sup> <a name="validate_for_compute_environments" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```python
validate_for_compute_environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList">subnet_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnet_id_list`<sup>Required</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList"></a>

```python
subnet_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---


### DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput">glue_connection_input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties">DataAwsccDatazoneConnectionPropsGlueProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_connection_input`<sup>Required</sup> <a name="glue_connection_input" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput"></a>

```python
glue_connection_input: DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsGlueProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGlueProperties">DataAwsccDatazoneConnectionPropsGlueProperties</a>

---


### DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties">DataAwsccDatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsHyperPodProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodProperties">DataAwsccDatazoneConnectionPropsHyperPodProperties</a>

---


### DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled">glue_lineage_sync_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties">DataAwsccDatazoneConnectionPropsIamProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_lineage_sync_enabled`<sup>Required</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```python
glue_lineage_sync_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsIamProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamProperties">DataAwsccDatazoneConnectionPropsIamProperties</a>

---


### DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled">glue_lineage_sync_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties">DataAwsccDatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_lineage_sync_enabled`<sup>Required</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```python
glue_lineage_sync_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsLakehouseProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehouseProperties">DataAwsccDatazoneConnectionPropsLakehouseProperties</a>

---


### DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn">tracking_server_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties">DataAwsccDatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tracking_server_arn`<sup>Required</sup> <a name="tracking_server_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn"></a>

```python
tracking_server_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsMlflowProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowProperties">DataAwsccDatazoneConnectionPropsMlflowProperties</a>

---


### DataAwsccDatazoneConnectionPropsOutputReference <a name="DataAwsccDatazoneConnectionPropsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.amazonQProperties">amazon_q_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.athenaProperties">athena_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.glueProperties">glue_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.hyperPodProperties">hyper_pod_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference">DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.iamProperties">iam_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference">DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.lakehouseProperties">lakehouse_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference">DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.mlflowProperties">mlflow_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference">DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.redshiftProperties">redshift_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.s3Properties">s3_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference">DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkEmrProperties">spark_emr_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkGlueProperties">spark_glue_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties">workflows_mwaa_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties">workflows_serverless_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps">DataAwsccDatazoneConnectionProps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_q_properties`<sup>Required</sup> <a name="amazon_q_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.amazonQProperties"></a>

```python
amazon_q_properties: DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAmazonQPropertiesOutputReference</a>

---

##### `athena_properties`<sup>Required</sup> <a name="athena_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.athenaProperties"></a>

```python
athena_properties: DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsAthenaPropertiesOutputReference</a>

---

##### `glue_properties`<sup>Required</sup> <a name="glue_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.glueProperties"></a>

```python
glue_properties: DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsGluePropertiesOutputReference</a>

---

##### `hyper_pod_properties`<sup>Required</sup> <a name="hyper_pod_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.hyperPodProperties"></a>

```python
hyper_pod_properties: DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference">DataAwsccDatazoneConnectionPropsHyperPodPropertiesOutputReference</a>

---

##### `iam_properties`<sup>Required</sup> <a name="iam_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.iamProperties"></a>

```python
iam_properties: DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference">DataAwsccDatazoneConnectionPropsIamPropertiesOutputReference</a>

---

##### `lakehouse_properties`<sup>Required</sup> <a name="lakehouse_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.lakehouseProperties"></a>

```python
lakehouse_properties: DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference">DataAwsccDatazoneConnectionPropsLakehousePropertiesOutputReference</a>

---

##### `mlflow_properties`<sup>Required</sup> <a name="mlflow_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.mlflowProperties"></a>

```python
mlflow_properties: DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference">DataAwsccDatazoneConnectionPropsMlflowPropertiesOutputReference</a>

---

##### `redshift_properties`<sup>Required</sup> <a name="redshift_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.redshiftProperties"></a>

```python
redshift_properties: DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference</a>

---

##### `s3_properties`<sup>Required</sup> <a name="s3_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.s3Properties"></a>

```python
s3_properties: DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference">DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference</a>

---

##### `spark_emr_properties`<sup>Required</sup> <a name="spark_emr_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkEmrProperties"></a>

```python
spark_emr_properties: DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference</a>

---

##### `spark_glue_properties`<sup>Required</sup> <a name="spark_glue_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.sparkGlueProperties"></a>

```python
spark_glue_properties: DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference</a>

---

##### `workflows_mwaa_properties`<sup>Required</sup> <a name="workflows_mwaa_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties"></a>

```python
workflows_mwaa_properties: DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a>

---

##### `workflows_serverless_properties`<sup>Required</sup> <a name="workflows_serverless_properties" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties"></a>

```python
workflows_serverless_properties: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionProps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionProps">DataAwsccDatazoneConnectionProps</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword">username_password</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `username_password`<sup>Required</sup> <a name="username_password" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword"></a>

```python
username_password: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule"></a>

```python
schedule: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync">lineage_sync</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties">DataAwsccDatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials"></a>

```python
credentials: DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a>

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `lineage_sync`<sup>Required</sup> <a name="lineage_sync" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync"></a>

```python
lineage_sync: DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage"></a>

```python
storage: DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsRedshiftProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftProperties">DataAwsccDatazoneConnectionPropsRedshiftProperties</a>

---


### DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference <a name="DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage">DataAwsccDatazoneConnectionPropsRedshiftPropertiesStorage</a>

---


### DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation">register_s3_access_grant_location</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId">s3_access_grant_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties">DataAwsccDatazoneConnectionPropsS3Properties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `register_s3_access_grant_location`<sup>Required</sup> <a name="register_s3_access_grant_location" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation"></a>

```python
register_s3_access_grant_location: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `s3_access_grant_location_id`<sup>Required</sup> <a name="s3_access_grant_location_id" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId"></a>

```python
s3_access_grant_location_id: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsS3Properties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsS3Properties">DataAwsccDatazoneConnectionPropsS3Properties</a>

---


### DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn">compute_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv">java_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri">log_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn">managed_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv">python_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole">runtime_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri">trusted_certificates_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties">DataAwsccDatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_arn`<sup>Required</sup> <a name="compute_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn"></a>

```python
compute_arn: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `java_virtual_env`<sup>Required</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv"></a>

```python
java_virtual_env: str
```

- *Type:* str

---

##### `log_uri`<sup>Required</sup> <a name="log_uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

---

##### `managed_endpoint_arn`<sup>Required</sup> <a name="managed_endpoint_arn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn"></a>

```python
managed_endpoint_arn: str
```

- *Type:* str

---

##### `python_virtual_env`<sup>Required</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv"></a>

```python
python_virtual_env: str
```

- *Type:* str

---

##### `runtime_role`<sup>Required</sup> <a name="runtime_role" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole"></a>

```python
runtime_role: str
```

- *Type:* str

---

##### `trusted_certificates_s3_uri`<sup>Required</sup> <a name="trusted_certificates_s3_uri" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri"></a>

```python
trusted_certificates_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsSparkEmrProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkEmrProperties">DataAwsccDatazoneConnectionPropsSparkEmrProperties</a>

---


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection">connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection"></a>

```python
connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---


### DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs">additional_args</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv">java_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv">python_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties">DataAwsccDatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_args`<sup>Required</sup> <a name="additional_args" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs"></a>

```python
additional_args: DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DataAwsccDatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a>

---

##### `glue_connection_name`<sup>Required</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `java_virtual_env`<sup>Required</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv"></a>

```python
java_virtual_env: str
```

- *Type:* str

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `python_virtual_env`<sup>Required</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv"></a>

```python
python_virtual_env: str
```

- *Type:* str

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsSparkGlueProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsSparkGlueProperties">DataAwsccDatazoneConnectionPropsSparkGlueProperties</a>

---


### DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference <a name="DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_connection

dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName">mwaa_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties">DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mwaa_environment_name`<sup>Required</sup> <a name="mwaa_environment_name" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName"></a>

```python
mwaa_environment_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneConnection.DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties">DataAwsccDatazoneConnectionPropsWorkflowsMwaaProperties</a>

---



