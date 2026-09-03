# `dataAwsccDatazoneProjectProfile` Submodule <a name="`dataAwsccDatazoneProjectProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneProjectProfile <a name="DataAwsccDatazoneProjectProfile" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/datazone_project_profile awscc_datazone_project_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/datazone_project_profile#id DataAwsccDatazoneProjectProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneProjectProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatazoneProjectProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatazoneProjectProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatazoneProjectProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/datazone_project_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneProjectProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.allowCustomProjectResourceTags">allow_custom_project_resource_tags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitId">domain_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitIdentifier">domain_unit_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.environmentConfigurations">environment_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectProfileId">project_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTags">project_resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList">DataAwsccDatazoneProjectProfileProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTagsDescription">project_resource_tags_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.useDefaultConfigurations">use_default_configurations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allow_custom_project_resource_tags`<sup>Required</sup> <a name="allow_custom_project_resource_tags" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.allowCustomProjectResourceTags"></a>

```python
allow_custom_project_resource_tags: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `domain_unit_id`<sup>Required</sup> <a name="domain_unit_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitId"></a>

```python
domain_unit_id: str
```

- *Type:* str

---

##### `domain_unit_identifier`<sup>Required</sup> <a name="domain_unit_identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.domainUnitIdentifier"></a>

```python
domain_unit_identifier: str
```

- *Type:* str

---

##### `environment_configurations`<sup>Required</sup> <a name="environment_configurations" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.environmentConfigurations"></a>

```python
environment_configurations: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList</a>

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_profile_id`<sup>Required</sup> <a name="project_profile_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectProfileId"></a>

```python
project_profile_id: str
```

- *Type:* str

---

##### `project_resource_tags`<sup>Required</sup> <a name="project_resource_tags" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTags"></a>

```python
project_resource_tags: DataAwsccDatazoneProjectProfileProjectResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList">DataAwsccDatazoneProjectProfileProjectResourceTagsList</a>

---

##### `project_resource_tags_description`<sup>Required</sup> <a name="project_resource_tags_description" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.projectResourceTagsDescription"></a>

```python
project_resource_tags_description: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `use_default_configurations`<sup>Required</sup> <a name="use_default_configurations" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.useDefaultConfigurations"></a>

```python
use_default_configurations: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneProjectProfileConfig <a name="DataAwsccDatazoneProjectProfileConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/datazone_project_profile#id DataAwsccDatazoneProjectProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatazoneProjectProfileEnvironmentConfigurations <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurations" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations()
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount()
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion()
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters()
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides()
```


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters()
```


### DataAwsccDatazoneProjectProfileProjectResourceTags <a name="DataAwsccDatazoneProjectProfileProjectResourceTags" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides">parameter_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters">resolved_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath">ssm_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_overrides`<sup>Required</sup> <a name="parameter_overrides" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides"></a>

```python
parameter_overrides: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a>

---

##### `resolved_parameters`<sup>Required</sup> <a name="resolved_parameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters"></a>

```python
resolved_parameters: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a>

---

##### `ssm_path`<sup>Required</sup> <a name="ssm_path" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath"></a>

```python
ssm_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable">is_editable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_editable`<sup>Required</sup> <a name="is_editable" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable"></a>

```python
is_editable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable">is_editable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_editable`<sup>Required</sup> <a name="is_editable" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable"></a>

```python
is_editable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters</a>

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference <a name="DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount">aws_account</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion">aws_region</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters">configuration_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode">deployment_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder">deployment_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId">environment_blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId">environment_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations">DataAwsccDatazoneProjectProfileEnvironmentConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_account`<sup>Required</sup> <a name="aws_account" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount"></a>

```python
aws_account: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a>

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion"></a>

```python
aws_region: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a>

---

##### `configuration_parameters`<sup>Required</sup> <a name="configuration_parameters" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters"></a>

```python
configuration_parameters: DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DataAwsccDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a>

---

##### `deployment_mode`<sup>Required</sup> <a name="deployment_mode" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode"></a>

```python
deployment_mode: str
```

- *Type:* str

---

##### `deployment_order`<sup>Required</sup> <a name="deployment_order" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder"></a>

```python
deployment_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_blueprint_id`<sup>Required</sup> <a name="environment_blueprint_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId"></a>

```python
environment_blueprint_id: str
```

- *Type:* str

---

##### `environment_configuration_id`<sup>Required</sup> <a name="environment_configuration_id" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId"></a>

```python
environment_configuration_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneProjectProfileEnvironmentConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileEnvironmentConfigurations">DataAwsccDatazoneProjectProfileEnvironmentConfigurations</a>

---


### DataAwsccDatazoneProjectProfileProjectResourceTagsList <a name="DataAwsccDatazoneProjectProfileProjectResourceTagsList" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference <a name="DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datazone_project_profile

dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable">is_value_editable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags">DataAwsccDatazoneProjectProfileProjectResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_editable`<sup>Required</sup> <a name="is_value_editable" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable"></a>

```python
is_value_editable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatazoneProjectProfileProjectResourceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneProjectProfile.DataAwsccDatazoneProjectProfileProjectResourceTags">DataAwsccDatazoneProjectProfileProjectResourceTags</a>

---



