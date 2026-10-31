# `dataAwsccStoragegatewayNfsFileShare` Submodule <a name="`dataAwsccStoragegatewayNfsFileShare` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewayNfsFileShare <a name="DataAwsccStoragegatewayNfsFileShare" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_nfs_file_share awscc_storagegateway_nfs_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_nfs_file_share#id DataAwsccStoragegatewayNfsFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccStoragegatewayNfsFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccStoragegatewayNfsFileShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccStoragegatewayNfsFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewayNfsFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference">DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.clientList">client_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareArn">file_share_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareId">file_share_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareName">file_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareStatus">file_share_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsEncrypted">kms_encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.nfsFileShareDefaults">nfs_file_share_defaults</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.notificationPolicy">notification_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.objectAcl">object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.readOnly">read_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.requesterPays">requester_pays</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.squash">squash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList">DataAwsccStoragegatewayNfsFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `audit_destination_arn`<sup>Required</sup> <a name="audit_destination_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `cache_attributes`<sup>Required</sup> <a name="cache_attributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.cacheAttributes"></a>

```python
cache_attributes: DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference">DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference</a>

---

##### `client_list`<sup>Required</sup> <a name="client_list" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.clientList"></a>

```python
client_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_storage_class`<sup>Required</sup> <a name="default_storage_class" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.defaultStorageClass"></a>

```python
default_storage_class: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `file_share_arn`<sup>Required</sup> <a name="file_share_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareArn"></a>

```python
file_share_arn: str
```

- *Type:* str

---

##### `file_share_id`<sup>Required</sup> <a name="file_share_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareId"></a>

```python
file_share_id: str
```

- *Type:* str

---

##### `file_share_name`<sup>Required</sup> <a name="file_share_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareName"></a>

```python
file_share_name: str
```

- *Type:* str

---

##### `file_share_status`<sup>Required</sup> <a name="file_share_status" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.fileShareStatus"></a>

```python
file_share_status: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `guess_mime_type_enabled`<sup>Required</sup> <a name="guess_mime_type_enabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.guessMimeTypeEnabled"></a>

```python
guess_mime_type_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsEncrypted"></a>

```python
kms_encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `nfs_file_share_defaults`<sup>Required</sup> <a name="nfs_file_share_defaults" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.nfsFileShareDefaults"></a>

```python
nfs_file_share_defaults: DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference</a>

---

##### `notification_policy`<sup>Required</sup> <a name="notification_policy" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.notificationPolicy"></a>

```python
notification_policy: str
```

- *Type:* str

---

##### `object_acl`<sup>Required</sup> <a name="object_acl" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.objectAcl"></a>

```python
object_acl: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.readOnly"></a>

```python
read_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `requester_pays`<sup>Required</sup> <a name="requester_pays" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.requesterPays"></a>

```python
requester_pays: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `squash`<sup>Required</sup> <a name="squash" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.squash"></a>

```python
squash: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tags"></a>

```python
tags: DataAwsccStoragegatewayNfsFileShareTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList">DataAwsccStoragegatewayNfsFileShareTagsList</a>

---

##### `vpc_endpoint_dns_name`<sup>Required</sup> <a name="vpc_endpoint_dns_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.vpcEndpointDnsName"></a>

```python
vpc_endpoint_dns_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewayNfsFileShareCacheAttributes <a name="DataAwsccStoragegatewayNfsFileShareCacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes()
```


### DataAwsccStoragegatewayNfsFileShareConfig <a name="DataAwsccStoragegatewayNfsFileShareConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_nfs_file_share#id DataAwsccStoragegatewayNfsFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults <a name="DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults()
```


### DataAwsccStoragegatewayNfsFileShareTags <a name="DataAwsccStoragegatewayNfsFileShareTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference <a name="DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes">DataAwsccStoragegatewayNfsFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_stale_timeout_in_seconds`<sup>Required</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStoragegatewayNfsFileShareCacheAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareCacheAttributes">DataAwsccStoragegatewayNfsFileShareCacheAttributes</a>

---


### DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference <a name="DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode">directory_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode">file_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId">group_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId">owner_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_mode`<sup>Required</sup> <a name="directory_mode" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.directoryMode"></a>

```python
directory_mode: str
```

- *Type:* str

---

##### `file_mode`<sup>Required</sup> <a name="file_mode" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.fileMode"></a>

```python
file_mode: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.groupId"></a>

```python
group_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.ownerId"></a>

```python
owner_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults">DataAwsccStoragegatewayNfsFileShareNfsFileShareDefaults</a>

---


### DataAwsccStoragegatewayNfsFileShareTagsList <a name="DataAwsccStoragegatewayNfsFileShareTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccStoragegatewayNfsFileShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccStoragegatewayNfsFileShareTagsOutputReference <a name="DataAwsccStoragegatewayNfsFileShareTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_nfs_file_share

dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags">DataAwsccStoragegatewayNfsFileShareTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStoragegatewayNfsFileShareTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayNfsFileShare.DataAwsccStoragegatewayNfsFileShareTags">DataAwsccStoragegatewayNfsFileShareTags</a>

---



