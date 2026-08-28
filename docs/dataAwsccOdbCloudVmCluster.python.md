# `dataAwsccOdbCloudVmCluster` Submodule <a name="`dataAwsccOdbCloudVmCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbCloudVmCluster <a name="DataAwsccOdbCloudVmCluster" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_cloud_vm_cluster#id DataAwsccOdbCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOdbCloudVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOdbCloudVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOdbCloudVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOdbCloudVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbCloudVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cloudVmClusterArn">cloud_vm_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cloudVmClusterId">cloud_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference">DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dataStorageSizeInTBs">data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dbNodes">db_nodes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList">DataAwsccOdbCloudVmClusterDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.iamRoles">iam_roles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList">DataAwsccOdbCloudVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.isLocalBackupEnabled">is_local_backup_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.isSparseDiskgroupEnabled">is_sparse_diskgroup_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.storageSizeInGBs">storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.systemVersion">system_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList">DataAwsccOdbCloudVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.vipIds">vip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `cloud_vm_cluster_arn`<sup>Required</sup> <a name="cloud_vm_cluster_arn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cloudVmClusterArn"></a>

```python
cloud_vm_cluster_arn: str
```

- *Type:* str

---

##### `cloud_vm_cluster_id`<sup>Required</sup> <a name="cloud_vm_cluster_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cloudVmClusterId"></a>

```python
cloud_vm_cluster_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dataCollectionOptions"></a>

```python
data_collection_options: DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference">DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference</a>

---

##### `data_storage_size_in_t_bs`<sup>Required</sup> <a name="data_storage_size_in_t_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dataStorageSizeInTBs"></a>

```python
data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_nodes`<sup>Required</sup> <a name="db_nodes" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dbNodes"></a>

```python
db_nodes: DataAwsccOdbCloudVmClusterDbNodesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList">DataAwsccOdbCloudVmClusterDbNodesList</a>

---

##### `db_node_storage_size_in_g_bs`<sup>Required</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.iamRoles"></a>

```python
iam_roles: DataAwsccOdbCloudVmClusterIamRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList">DataAwsccOdbCloudVmClusterIamRolesList</a>

---

##### `is_local_backup_enabled`<sup>Required</sup> <a name="is_local_backup_enabled" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.isLocalBackupEnabled"></a>

```python
is_local_backup_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_sparse_diskgroup_enabled`<sup>Required</sup> <a name="is_sparse_diskgroup_enabled" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.isSparseDiskgroupEnabled"></a>

```python
is_sparse_diskgroup_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_g_bs`<sup>Required</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_size_in_g_bs`<sup>Required</sup> <a name="storage_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.storageSizeInGBs"></a>

```python
storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_version`<sup>Required</sup> <a name="system_version" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.systemVersion"></a>

```python
system_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.tags"></a>

```python
tags: DataAwsccOdbCloudVmClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList">DataAwsccOdbCloudVmClusterTagsList</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vip_ids`<sup>Required</sup> <a name="vip_ids" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.vipIds"></a>

```python
vip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbCloudVmClusterConfig <a name="DataAwsccOdbCloudVmClusterConfig" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_cloud_vm_cluster#id DataAwsccOdbCloudVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbCloudVmClusterDataCollectionOptions <a name="DataAwsccOdbCloudVmClusterDataCollectionOptions" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptions()
```


### DataAwsccOdbCloudVmClusterDbNodes <a name="DataAwsccOdbCloudVmClusterDbNodes" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodes()
```


### DataAwsccOdbCloudVmClusterDbNodesTags <a name="DataAwsccOdbCloudVmClusterDbNodesTags" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTags()
```


### DataAwsccOdbCloudVmClusterIamRoles <a name="DataAwsccOdbCloudVmClusterIamRoles" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRoles.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRoles()
```


### DataAwsccOdbCloudVmClusterTags <a name="DataAwsccOdbCloudVmClusterTags" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference <a name="DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptions">DataAwsccOdbCloudVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudVmClusterDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDataCollectionOptions">DataAwsccOdbCloudVmClusterDataCollectionOptions</a>

---


### DataAwsccOdbCloudVmClusterDbNodesList <a name="DataAwsccOdbCloudVmClusterDbNodesList" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbCloudVmClusterDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbCloudVmClusterDbNodesOutputReference <a name="DataAwsccOdbCloudVmClusterDbNodesOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.backupIpId">backup_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id">backup_vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn">db_node_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbNodeId">db_node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbServerId">db_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.hostIpId">host_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList">DataAwsccOdbCloudVmClusterDbNodesTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.vnic2Id">vnic2_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.vnicId">vnic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodes">DataAwsccOdbCloudVmClusterDbNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_ip_id`<sup>Required</sup> <a name="backup_ip_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.backupIpId"></a>

```python
backup_ip_id: str
```

- *Type:* str

---

##### `backup_vnic2_id`<sup>Required</sup> <a name="backup_vnic2_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.backupVnic2Id"></a>

```python
backup_vnic2_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_arn`<sup>Required</sup> <a name="db_node_arn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbNodeArn"></a>

```python
db_node_arn: str
```

- *Type:* str

---

##### `db_node_id`<sup>Required</sup> <a name="db_node_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbNodeId"></a>

```python
db_node_id: str
```

- *Type:* str

---

##### `db_node_storage_size_in_g_bs`<sup>Required</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_server_id`<sup>Required</sup> <a name="db_server_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbServerId"></a>

```python
db_server_id: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `host_ip_id`<sup>Required</sup> <a name="host_ip_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.hostIpId"></a>

```python
host_ip_id: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `memory_size_in_g_bs`<sup>Required</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.tags"></a>

```python
tags: DataAwsccOdbCloudVmClusterDbNodesTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList">DataAwsccOdbCloudVmClusterDbNodesTagsList</a>

---

##### `vnic2_id`<sup>Required</sup> <a name="vnic2_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.vnic2Id"></a>

```python
vnic2_id: str
```

- *Type:* str

---

##### `vnic_id`<sup>Required</sup> <a name="vnic_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.vnicId"></a>

```python
vnic_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudVmClusterDbNodes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodes">DataAwsccOdbCloudVmClusterDbNodes</a>

---


### DataAwsccOdbCloudVmClusterDbNodesTagsList <a name="DataAwsccOdbCloudVmClusterDbNodesTagsList" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference <a name="DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTags">DataAwsccOdbCloudVmClusterDbNodesTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudVmClusterDbNodesTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterDbNodesTags">DataAwsccOdbCloudVmClusterDbNodesTags</a>

---


### DataAwsccOdbCloudVmClusterIamRolesList <a name="DataAwsccOdbCloudVmClusterIamRolesList" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbCloudVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbCloudVmClusterIamRolesOutputReference <a name="DataAwsccOdbCloudVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.awsIntegration">aws_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRoles">DataAwsccOdbCloudVmClusterIamRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_integration`<sup>Required</sup> <a name="aws_integration" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```python
aws_integration: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudVmClusterIamRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterIamRoles">DataAwsccOdbCloudVmClusterIamRoles</a>

---


### DataAwsccOdbCloudVmClusterTagsList <a name="DataAwsccOdbCloudVmClusterTagsList" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbCloudVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbCloudVmClusterTagsOutputReference <a name="DataAwsccOdbCloudVmClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_vm_cluster

dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTags">DataAwsccOdbCloudVmClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudVmClusterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudVmCluster.DataAwsccOdbCloudVmClusterTags">DataAwsccOdbCloudVmClusterTags</a>

---



