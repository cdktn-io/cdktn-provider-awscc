# `dataAwsccFsxDataRepositoryAssociation` Submodule <a name="`dataAwsccFsxDataRepositoryAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFsxDataRepositoryAssociation <a name="DataAwsccFsxDataRepositoryAssociation" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_data_repository_association awscc_fsx_data_repository_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_data_repository_association#id DataAwsccFsxDataRepositoryAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccFsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccFsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccFsxDataRepositoryAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccFsxDataRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFsxDataRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate">batch_import_meta_data_on_create</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dataRepositoryPath">data_repository_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemPath">file_system_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.importedFileChunkSize">imported_file_chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference">DataAwsccFsxDataRepositoryAssociationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList">DataAwsccFsxDataRepositoryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `batch_import_meta_data_on_create`<sup>Required</sup> <a name="batch_import_meta_data_on_create" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate"></a>

```python
batch_import_meta_data_on_create: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `data_repository_path`<sup>Required</sup> <a name="data_repository_path" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dataRepositoryPath"></a>

```python
data_repository_path: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `file_system_path`<sup>Required</sup> <a name="file_system_path" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemPath"></a>

```python
file_system_path: str
```

- *Type:* str

---

##### `imported_file_chunk_size`<sup>Required</sup> <a name="imported_file_chunk_size" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.importedFileChunkSize"></a>

```python
imported_file_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.s3"></a>

```python
s3: DataAwsccFsxDataRepositoryAssociationS3OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference">DataAwsccFsxDataRepositoryAssociationS3OutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tags"></a>

```python
tags: DataAwsccFsxDataRepositoryAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList">DataAwsccFsxDataRepositoryAssociationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFsxDataRepositoryAssociationConfig <a name="DataAwsccFsxDataRepositoryAssociationConfig" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/fsx_data_repository_association#id DataAwsccFsxDataRepositoryAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFsxDataRepositoryAssociationS3 <a name="DataAwsccFsxDataRepositoryAssociationS3" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3()
```


### DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy <a name="DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy()
```


### DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy <a name="DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy()
```


### DataAwsccFsxDataRepositoryAssociationTags <a name="DataAwsccFsxDataRepositoryAssociationTags" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference <a name="DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy</a>

---


### DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference <a name="DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy</a>

---


### DataAwsccFsxDataRepositoryAssociationS3OutputReference <a name="DataAwsccFsxDataRepositoryAssociationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy">auto_export_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy">auto_import_policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3">DataAwsccFsxDataRepositoryAssociationS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_export_policy`<sup>Required</sup> <a name="auto_export_policy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy"></a>

```python
auto_export_policy: DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a>

---

##### `auto_import_policy`<sup>Required</sup> <a name="auto_import_policy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy"></a>

```python
auto_import_policy: DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxDataRepositoryAssociationS3
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3">DataAwsccFsxDataRepositoryAssociationS3</a>

---


### DataAwsccFsxDataRepositoryAssociationTagsList <a name="DataAwsccFsxDataRepositoryAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccFsxDataRepositoryAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccFsxDataRepositoryAssociationTagsOutputReference <a name="DataAwsccFsxDataRepositoryAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_fsx_data_repository_association

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags">DataAwsccFsxDataRepositoryAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccFsxDataRepositoryAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags">DataAwsccFsxDataRepositoryAssociationTags</a>

---



