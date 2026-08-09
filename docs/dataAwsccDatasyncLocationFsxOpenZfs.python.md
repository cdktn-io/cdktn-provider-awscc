# `dataAwsccDatasyncLocationFsxOpenZfs` Submodule <a name="`dataAwsccDatasyncLocationFsxOpenZfs` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationFsxOpenZfs <a name="DataAwsccDatasyncLocationFsxOpenZfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_open_zfs awscc_datasync_location_fsx_open_zfs}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_open_zfs#id DataAwsccDatasyncLocationFsxOpenZfs#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOpenZfs resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOpenZfs resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatasyncLocationFsxOpenZfs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatasyncLocationFsxOpenZfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_open_zfs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationFsxOpenZfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fsxFilesystemArn">fsx_filesystem_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.securityGroupArns">security_group_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList">DataAwsccDatasyncLocationFsxOpenZfsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `fsx_filesystem_arn`<sup>Required</sup> <a name="fsx_filesystem_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.fsxFilesystemArn"></a>

```python
fsx_filesystem_arn: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.protocol"></a>

```python
protocol: DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference</a>

---

##### `security_group_arns`<sup>Required</sup> <a name="security_group_arns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.securityGroupArns"></a>

```python
security_group_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tags"></a>

```python
tags: DataAwsccDatasyncLocationFsxOpenZfsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList">DataAwsccDatasyncLocationFsxOpenZfsTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationFsxOpenZfsConfig <a name="DataAwsccDatasyncLocationFsxOpenZfsConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datasync_location_fsx_open_zfs#id DataAwsccDatasyncLocationFsxOpenZfs#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationFsxOpenZfsProtocol <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol()
```


### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs()
```


### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions()
```


### DataAwsccDatasyncLocationFsxOpenZfsTags <a name="DataAwsccDatasyncLocationFsxOpenZfsTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptions</a>

---


### DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptions">mount_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mount_options`<sup>Required</sup> <a name="mount_options" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.mountOptions"></a>

```python
mount_options: DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsMountOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfs</a>

---


### DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol">DataAwsccDatasyncLocationFsxOpenZfsProtocol</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.nfs"></a>

```python
nfs: DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOpenZfsProtocolNfsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocolOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOpenZfsProtocol
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsProtocol">DataAwsccDatasyncLocationFsxOpenZfsProtocol</a>

---


### DataAwsccDatasyncLocationFsxOpenZfsTagsList <a name="DataAwsccDatasyncLocationFsxOpenZfsTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference <a name="DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_fsx_open_zfs

dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags">DataAwsccDatasyncLocationFsxOpenZfsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationFsxOpenZfsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOpenZfs.DataAwsccDatasyncLocationFsxOpenZfsTags">DataAwsccDatasyncLocationFsxOpenZfsTags</a>

---



