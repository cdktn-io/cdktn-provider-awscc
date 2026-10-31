# `dataAwsccStoragegatewaySmbFileShare` Submodule <a name="`dataAwsccStoragegatewaySmbFileShare` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewaySmbFileShare <a name="DataAwsccStoragegatewaySmbFileShare" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_smb_file_share awscc_storagegateway_smb_file_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_smb_file_share#id DataAwsccStoragegatewaySmbFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccStoragegatewaySmbFileShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccStoragegatewaySmbFileShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccStoragegatewaySmbFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_smb_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewaySmbFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.accessBasedEnumeration">access_based_enumeration</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.adminUserList">admin_user_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.auditDestinationArn">audit_destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.authentication">authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.bucketRegion">bucket_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cacheAttributes">cache_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference">DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.caseSensitivity">case_sensitivity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.defaultStorageClass">default_storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareArn">file_share_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareId">file_share_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareName">file_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareStatus">file_share_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.guessMimeTypeEnabled">guess_mime_type_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.invalidUserList">invalid_user_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsEncrypted">kms_encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.notificationPolicy">notification_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.objectAcl">object_acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.oplocksEnabled">oplocks_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.readOnly">read_only</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.requesterPays">requester_pays</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.smbaclEnabled">smbacl_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList">DataAwsccStoragegatewaySmbFileShareTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.validUserList">valid_user_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.vpcEndpointDnsName">vpc_endpoint_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `access_based_enumeration`<sup>Required</sup> <a name="access_based_enumeration" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.accessBasedEnumeration"></a>

```python
access_based_enumeration: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `admin_user_list`<sup>Required</sup> <a name="admin_user_list" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.adminUserList"></a>

```python
admin_user_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `audit_destination_arn`<sup>Required</sup> <a name="audit_destination_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.auditDestinationArn"></a>

```python
audit_destination_arn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

---

##### `bucket_region`<sup>Required</sup> <a name="bucket_region" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.bucketRegion"></a>

```python
bucket_region: str
```

- *Type:* str

---

##### `cache_attributes`<sup>Required</sup> <a name="cache_attributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.cacheAttributes"></a>

```python
cache_attributes: DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference">DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference</a>

---

##### `case_sensitivity`<sup>Required</sup> <a name="case_sensitivity" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.caseSensitivity"></a>

```python
case_sensitivity: str
```

- *Type:* str

---

##### `default_storage_class`<sup>Required</sup> <a name="default_storage_class" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.defaultStorageClass"></a>

```python
default_storage_class: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `file_share_arn`<sup>Required</sup> <a name="file_share_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareArn"></a>

```python
file_share_arn: str
```

- *Type:* str

---

##### `file_share_id`<sup>Required</sup> <a name="file_share_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareId"></a>

```python
file_share_id: str
```

- *Type:* str

---

##### `file_share_name`<sup>Required</sup> <a name="file_share_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareName"></a>

```python
file_share_name: str
```

- *Type:* str

---

##### `file_share_status`<sup>Required</sup> <a name="file_share_status" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.fileShareStatus"></a>

```python
file_share_status: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `guess_mime_type_enabled`<sup>Required</sup> <a name="guess_mime_type_enabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.guessMimeTypeEnabled"></a>

```python
guess_mime_type_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `invalid_user_list`<sup>Required</sup> <a name="invalid_user_list" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.invalidUserList"></a>

```python
invalid_user_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsEncrypted"></a>

```python
kms_encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `notification_policy`<sup>Required</sup> <a name="notification_policy" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.notificationPolicy"></a>

```python
notification_policy: str
```

- *Type:* str

---

##### `object_acl`<sup>Required</sup> <a name="object_acl" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.objectAcl"></a>

```python
object_acl: str
```

- *Type:* str

---

##### `oplocks_enabled`<sup>Required</sup> <a name="oplocks_enabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.oplocksEnabled"></a>

```python
oplocks_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.readOnly"></a>

```python
read_only: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `requester_pays`<sup>Required</sup> <a name="requester_pays" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.requesterPays"></a>

```python
requester_pays: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `smbacl_enabled`<sup>Required</sup> <a name="smbacl_enabled" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.smbaclEnabled"></a>

```python
smbacl_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tags"></a>

```python
tags: DataAwsccStoragegatewaySmbFileShareTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList">DataAwsccStoragegatewaySmbFileShareTagsList</a>

---

##### `valid_user_list`<sup>Required</sup> <a name="valid_user_list" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.validUserList"></a>

```python
valid_user_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_endpoint_dns_name`<sup>Required</sup> <a name="vpc_endpoint_dns_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.vpcEndpointDnsName"></a>

```python
vpc_endpoint_dns_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewaySmbFileShareCacheAttributes <a name="DataAwsccStoragegatewaySmbFileShareCacheAttributes" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes()
```


### DataAwsccStoragegatewaySmbFileShareConfig <a name="DataAwsccStoragegatewaySmbFileShareConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/storagegateway_smb_file_share#id DataAwsccStoragegatewaySmbFileShare#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewaySmbFileShareTags <a name="DataAwsccStoragegatewaySmbFileShareTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference <a name="DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds">cache_stale_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes">DataAwsccStoragegatewaySmbFileShareCacheAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_stale_timeout_in_seconds`<sup>Required</sup> <a name="cache_stale_timeout_in_seconds" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.cacheStaleTimeoutInSeconds"></a>

```python
cache_stale_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStoragegatewaySmbFileShareCacheAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareCacheAttributes">DataAwsccStoragegatewaySmbFileShareCacheAttributes</a>

---


### DataAwsccStoragegatewaySmbFileShareTagsList <a name="DataAwsccStoragegatewaySmbFileShareTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccStoragegatewaySmbFileShareTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccStoragegatewaySmbFileShareTagsOutputReference <a name="DataAwsccStoragegatewaySmbFileShareTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_smb_file_share

dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags">DataAwsccStoragegatewaySmbFileShareTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStoragegatewaySmbFileShareTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewaySmbFileShare.DataAwsccStoragegatewaySmbFileShareTags">DataAwsccStoragegatewaySmbFileShareTags</a>

---



