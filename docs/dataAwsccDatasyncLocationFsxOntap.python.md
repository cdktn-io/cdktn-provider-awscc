# `dataAwsccDatasyncLocationFsxOntap` Submodule <a name="`dataAwsccDatasyncLocationFsxOntap` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationFsxOntap <a name="DataAwsccDatasyncLocationFsxOntap" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_ontap awscc_datasync_location_fsx_ontap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_ontap#id DataAwsccDatasyncLocationFsxOntap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatasyncLocationFsxOntap to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatasyncLocationFsxOntap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_ontap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationFsxOntap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fsxFilesystemArn">fsx_filesystem_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.storageVirtualMachineArn">storage_virtual_machine_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList">DataAwsccDatasyncLocationFsxOntapTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `fsx_filesystem_arn`<sup>Required</sup> <a name="fsx_filesystem_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fsxFilesystemArn"></a>

```python
fsx_filesystem_arn: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.protocol"></a>

```python
protocol: DataAwsccDatasyncLocationFsxOntapProtocolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolOutputReference</a>

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_virtual_machine_arn`<sup>Required</sup> <a name="storage_virtual_machine_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.storageVirtualMachineArn"></a>

```python
storage_virtual_machine_arn: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tags"></a>

```python
tags: DataAwsccDatasyncLocationFsxOntapTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList">DataAwsccDatasyncLocationFsxOntapTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationFsxOntapConfig <a name="DataAwsccDatasyncLocationFsxOntapConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_ontap#id DataAwsccDatasyncLocationFsxOntap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationFsxOntapProtocol <a name="DataAwsccDatasyncLocationFsxOntapProtocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol()
```


### DataAwsccDatasyncLocationFsxOntapProtocolNfs <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs()
```


### DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions()
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmb <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmb" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb()
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig()
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig()
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig()
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions()
```


### DataAwsccDatasyncLocationFsxOntapTags <a name="DataAwsccDatasyncLocationFsxOntapTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs">DataAwsccDatasyncLocationFsxOntapProtocolNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions"></a>

```python
mount_options: DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocolNfs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs">DataAwsccDatasyncLocationFsxOntapProtocolNfs</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol">DataAwsccDatasyncLocationFsxOntapProtocol</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.nfs"></a>

```python
nfs: DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.smb"></a>

```python
smb: DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocol
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol">DataAwsccDatasyncLocationFsxOntapProtocol</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">secret_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_access_role_arn`<sup>Required</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```python
secret_access_role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig">cmk_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig">custom_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig">managed_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb">DataAwsccDatasyncLocationFsxOntapProtocolSmb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmk_secret_config`<sup>Required</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig"></a>

```python
cmk_secret_config: DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a>

---

##### `custom_secret_config`<sup>Required</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig"></a>

```python
custom_secret_config: DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `managed_secret_config`<sup>Required</sup> <a name="managed_secret_config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig"></a>

```python
managed_secret_config: DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a>

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions"></a>

```python
mount_options: DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapProtocolSmb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb">DataAwsccDatasyncLocationFsxOntapProtocolSmb</a>

---


### DataAwsccDatasyncLocationFsxOntapTagsList <a name="DataAwsccDatasyncLocationFsxOntapTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatasyncLocationFsxOntapTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatasyncLocationFsxOntapTagsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_ontap

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags">DataAwsccDatasyncLocationFsxOntapTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOntapTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags">DataAwsccDatasyncLocationFsxOntapTags</a>

---



