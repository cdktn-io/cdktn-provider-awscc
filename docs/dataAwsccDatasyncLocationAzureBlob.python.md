# `dataAwsccDatasyncLocationAzureBlob` Submodule <a name="`dataAwsccDatasyncLocationAzureBlob` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationAzureBlob <a name="DataAwsccDatasyncLocationAzureBlob" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_azure_blob awscc_datasync_location_azure_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_azure_blob#id DataAwsccDatasyncLocationAzureBlob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDatasyncLocationAzureBlob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDatasyncLocationAzureBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationAzureBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureAccessTier">azure_access_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobAuthenticationType">azure_blob_authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobContainerUrl">azure_blob_container_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobSasConfiguration">azure_blob_sas_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobType">azure_blob_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cmkSecretConfig">cmk_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.customSecretConfig">custom_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationArn">location_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.managedSecretConfig">managed_secret_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList">DataAwsccDatasyncLocationAzureBlobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `azure_access_tier`<sup>Required</sup> <a name="azure_access_tier" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureAccessTier"></a>

```python
azure_access_tier: str
```

- *Type:* str

---

##### `azure_blob_authentication_type`<sup>Required</sup> <a name="azure_blob_authentication_type" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobAuthenticationType"></a>

```python
azure_blob_authentication_type: str
```

- *Type:* str

---

##### `azure_blob_container_url`<sup>Required</sup> <a name="azure_blob_container_url" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobContainerUrl"></a>

```python
azure_blob_container_url: str
```

- *Type:* str

---

##### `azure_blob_sas_configuration`<sup>Required</sup> <a name="azure_blob_sas_configuration" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobSasConfiguration"></a>

```python
azure_blob_sas_configuration: DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a>

---

##### `azure_blob_type`<sup>Required</sup> <a name="azure_blob_type" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobType"></a>

```python
azure_blob_type: str
```

- *Type:* str

---

##### `cmk_secret_config`<sup>Required</sup> <a name="cmk_secret_config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cmkSecretConfig"></a>

```python
cmk_secret_config: DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference</a>

---

##### `custom_secret_config`<sup>Required</sup> <a name="custom_secret_config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.customSecretConfig"></a>

```python
custom_secret_config: DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference</a>

---

##### `location_arn`<sup>Required</sup> <a name="location_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationArn"></a>

```python
location_arn: str
```

- *Type:* str

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `managed_secret_config`<sup>Required</sup> <a name="managed_secret_config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.managedSecretConfig"></a>

```python
managed_secret_config: DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference</a>

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tags"></a>

```python
tags: DataAwsccDatasyncLocationAzureBlobTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList">DataAwsccDatasyncLocationAzureBlobTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration <a name="DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration()
```


### DataAwsccDatasyncLocationAzureBlobCmkSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobCmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig()
```


### DataAwsccDatasyncLocationAzureBlobConfig <a name="DataAwsccDatasyncLocationAzureBlobConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_azure_blob#id DataAwsccDatasyncLocationAzureBlob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationAzureBlobCustomSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobCustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig()
```


### DataAwsccDatasyncLocationAzureBlobManagedSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig()
```


### DataAwsccDatasyncLocationAzureBlobTags <a name="DataAwsccDatasyncLocationAzureBlobTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference <a name="DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken">azure_blob_sas_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_blob_sas_token`<sup>Required</sup> <a name="azure_blob_sas_token" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken"></a>

```python
azure_blob_sas_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

---


### DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig">DataAwsccDatasyncLocationAzureBlobCmkSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationAzureBlobCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig">DataAwsccDatasyncLocationAzureBlobCmkSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn">secret_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig">DataAwsccDatasyncLocationAzureBlobCustomSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_access_role_arn`<sup>Required</sup> <a name="secret_access_role_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```python
secret_access_role_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationAzureBlobCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig">DataAwsccDatasyncLocationAzureBlobCustomSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig">DataAwsccDatasyncLocationAzureBlobManagedSecretConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationAzureBlobManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig">DataAwsccDatasyncLocationAzureBlobManagedSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobTagsList <a name="DataAwsccDatasyncLocationAzureBlobTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDatasyncLocationAzureBlobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDatasyncLocationAzureBlobTagsOutputReference <a name="DataAwsccDatasyncLocationAzureBlobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_datasync_location_azure_blob

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags">DataAwsccDatasyncLocationAzureBlobTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDatasyncLocationAzureBlobTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags">DataAwsccDatasyncLocationAzureBlobTags</a>

---



