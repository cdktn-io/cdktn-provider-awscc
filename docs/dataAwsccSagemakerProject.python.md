# `dataAwsccSagemakerProject` Submodule <a name="`dataAwsccSagemakerProject` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerProject <a name="DataAwsccSagemakerProject" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_project awscc_sagemaker_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProject(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_project#id DataAwsccSagemakerProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProject.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSagemakerProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSagemakerProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSagemakerProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectArn">project_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectDescription">project_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectStatus">project_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisionedProductDetails">service_catalog_provisioned_product_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisioningDetails">service_catalog_provisioning_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList">DataAwsccSagemakerProjectTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.templateProviderDetails">template_provider_details</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList">DataAwsccSagemakerProjectTemplateProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectArn"></a>

```python
project_arn: str
```

- *Type:* str

---

##### `project_description`<sup>Required</sup> <a name="project_description" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectDescription"></a>

```python
project_description: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `project_status`<sup>Required</sup> <a name="project_status" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.projectStatus"></a>

```python
project_status: str
```

- *Type:* str

---

##### `service_catalog_provisioned_product_details`<sup>Required</sup> <a name="service_catalog_provisioned_product_details" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisionedProductDetails"></a>

```python
service_catalog_provisioned_product_details: DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference</a>

---

##### `service_catalog_provisioning_details`<sup>Required</sup> <a name="service_catalog_provisioning_details" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.serviceCatalogProvisioningDetails"></a>

```python
service_catalog_provisioning_details: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tags"></a>

```python
tags: DataAwsccSagemakerProjectTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList">DataAwsccSagemakerProjectTagsList</a>

---

##### `template_provider_details`<sup>Required</sup> <a name="template_provider_details" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.templateProviderDetails"></a>

```python
template_provider_details: DataAwsccSagemakerProjectTemplateProviderDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList">DataAwsccSagemakerProjectTemplateProviderDetailsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerProjectConfig <a name="DataAwsccSagemakerProjectConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_project#id DataAwsccSagemakerProject#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails <a name="DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails()
```


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetails <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails()
```


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters()
```


### DataAwsccSagemakerProjectTags <a name="DataAwsccSagemakerProjectTags" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags()
```


### DataAwsccSagemakerProjectTemplateProviderDetails <a name="DataAwsccSagemakerProjectTemplateProviderDetails" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails()
```


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail()
```


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference <a name="DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId">provisioned_product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage">provisioned_product_status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `provisioned_product_id`<sup>Required</sup> <a name="provisioned_product_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductId"></a>

```python
provisioned_product_id: str
```

- *Type:* str

---

##### `provisioned_product_status_message`<sup>Required</sup> <a name="provisioned_product_status_message" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.provisionedProductStatusMessage"></a>

```python
provisioned_product_status_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails">DataAwsccSagemakerProjectServiceCatalogProvisionedProductDetails</a>

---


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId">path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId">product_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId">provisioning_artifact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters">provisioning_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails">DataAwsccSagemakerProjectServiceCatalogProvisioningDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_id`<sup>Required</sup> <a name="path_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.pathId"></a>

```python
path_id: str
```

- *Type:* str

---

##### `product_id`<sup>Required</sup> <a name="product_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.productId"></a>

```python
product_id: str
```

- *Type:* str

---

##### `provisioning_artifact_id`<sup>Required</sup> <a name="provisioning_artifact_id" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningArtifactId"></a>

```python
provisioning_artifact_id: str
```

- *Type:* str

---

##### `provisioning_parameters`<sup>Required</sup> <a name="provisioning_parameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.provisioningParameters"></a>

```python
provisioning_parameters: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProjectServiceCatalogProvisioningDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetails">DataAwsccSagemakerProjectServiceCatalogProvisioningDetails</a>

---


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference <a name="DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters">DataAwsccSagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameters</a>

---


### DataAwsccSagemakerProjectTagsList <a name="DataAwsccSagemakerProjectTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerProjectTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerProjectTagsOutputReference <a name="DataAwsccSagemakerProjectTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags">DataAwsccSagemakerProjectTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProjectTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTags">DataAwsccSagemakerProjectTags</a>

---


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.parameters"></a>

```python
parameters: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList</a>

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetail</a>

---


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference <a name="DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailParameters</a>

---


### DataAwsccSagemakerProjectTemplateProviderDetailsList <a name="DataAwsccSagemakerProjectTemplateProviderDetailsList" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference <a name="DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_sagemaker_project

dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail">cfn_template_provider_detail</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails">DataAwsccSagemakerProjectTemplateProviderDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cfn_template_provider_detail`<sup>Required</sup> <a name="cfn_template_provider_detail" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.cfnTemplateProviderDetail"></a>

```python
cfn_template_provider_detail: DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference">DataAwsccSagemakerProjectTemplateProviderDetailsCfnTemplateProviderDetailOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSagemakerProjectTemplateProviderDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerProject.DataAwsccSagemakerProjectTemplateProviderDetails">DataAwsccSagemakerProjectTemplateProviderDetails</a>

---



