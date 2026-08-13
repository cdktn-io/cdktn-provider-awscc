# `dataAwsccOdbCloudAutonomousVmCluster` Submodule <a name="`dataAwsccOdbCloudAutonomousVmCluster` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbCloudAutonomousVmCluster <a name="DataAwsccOdbCloudAutonomousVmCluster" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#id DataAwsccOdbCloudAutonomousVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccOdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccOdbCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccOdbCloudAutonomousVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccOdbCloudAutonomousVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbCloudAutonomousVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage">autonomous_data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs">autonomous_data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs">available_autonomous_data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableContainerDatabases">available_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableCpus">available_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn">cloud_autonomous_vm_cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId">cloud_autonomous_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId">cloud_exadata_infrastructure_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.computeModel">compute_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode">cpu_core_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuPercentage">cpu_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs">data_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs">data_storage_size_in_t_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs">db_node_storage_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbServers">db_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue">exadata_storage_in_t_bs_lowest_scaled_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.iamRoles">iam_roles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList">DataAwsccOdbCloudAutonomousVmClusterIamRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster">is_mtls_enabled_vm_cluster</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue">max_acds_lowest_scaled_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs">memory_per_oracle_compute_unit_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memorySizeInGBs">memory_size_in_g_bs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases">non_provisionable_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociResourceAnchorName">oci_resource_anchor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociUrl">oci_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.odbNetworkId">odb_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases">provisionable_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases">provisioned_autonomous_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedCpus">provisioned_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reclaimableCpus">reclaimable_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reservedCpus">reserved_cpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortNonTls">scan_listener_port_non_tls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortTls">scan_listener_port_tls</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList">DataAwsccOdbCloudAutonomousVmClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.totalContainerDatabases">total_container_databases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `autonomous_data_storage_percentage`<sup>Required</sup> <a name="autonomous_data_storage_percentage" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStoragePercentage"></a>

```python
autonomous_data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autonomous_data_storage_size_in_t_bs`<sup>Required</sup> <a name="autonomous_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.autonomousDataStorageSizeInTBs"></a>

```python
autonomous_data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_autonomous_data_storage_size_in_t_bs`<sup>Required</sup> <a name="available_autonomous_data_storage_size_in_t_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableAutonomousDataStorageSizeInTBs"></a>

```python
available_autonomous_data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_container_databases`<sup>Required</sup> <a name="available_container_databases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableContainerDatabases"></a>

```python
available_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_cpus`<sup>Required</sup> <a name="available_cpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.availableCpus"></a>

```python
available_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloud_autonomous_vm_cluster_arn`<sup>Required</sup> <a name="cloud_autonomous_vm_cluster_arn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterArn"></a>

```python
cloud_autonomous_vm_cluster_arn: str
```

- *Type:* str

---

##### `cloud_autonomous_vm_cluster_id`<sup>Required</sup> <a name="cloud_autonomous_vm_cluster_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudAutonomousVmClusterId"></a>

```python
cloud_autonomous_vm_cluster_id: str
```

- *Type:* str

---

##### `cloud_exadata_infrastructure_id`<sup>Required</sup> <a name="cloud_exadata_infrastructure_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cloudExadataInfrastructureId"></a>

```python
cloud_exadata_infrastructure_id: str
```

- *Type:* str

---

##### `compute_model`<sup>Required</sup> <a name="compute_model" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.computeModel"></a>

```python
compute_model: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_core_count_per_node`<sup>Required</sup> <a name="cpu_core_count_per_node" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuCoreCountPerNode"></a>

```python
cpu_core_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_percentage`<sup>Required</sup> <a name="cpu_percentage" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.cpuPercentage"></a>

```python
cpu_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_g_bs`<sup>Required</sup> <a name="data_storage_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInGBs"></a>

```python
data_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_t_bs`<sup>Required</sup> <a name="data_storage_size_in_t_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dataStorageSizeInTBs"></a>

```python
data_storage_size_in_t_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_node_storage_size_in_g_bs`<sup>Required</sup> <a name="db_node_storage_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbNodeStorageSizeInGBs"></a>

```python
db_node_storage_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_servers`<sup>Required</sup> <a name="db_servers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.dbServers"></a>

```python
db_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `exadata_storage_in_t_bs_lowest_scaled_value`<sup>Required</sup> <a name="exadata_storage_in_t_bs_lowest_scaled_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.exadataStorageInTBsLowestScaledValue"></a>

```python
exadata_storage_in_t_bs_lowest_scaled_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `iam_roles`<sup>Required</sup> <a name="iam_roles" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.iamRoles"></a>

```python
iam_roles: DataAwsccOdbCloudAutonomousVmClusterIamRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList">DataAwsccOdbCloudAutonomousVmClusterIamRolesList</a>

---

##### `is_mtls_enabled_vm_cluster`<sup>Required</sup> <a name="is_mtls_enabled_vm_cluster" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.isMtlsEnabledVmCluster"></a>

```python
is_mtls_enabled_vm_cluster: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maintenanceWindow"></a>

```python
maintenance_window: DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference</a>

---

##### `max_acds_lowest_scaled_value`<sup>Required</sup> <a name="max_acds_lowest_scaled_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.maxAcdsLowestScaledValue"></a>

```python
max_acds_lowest_scaled_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_oracle_compute_unit_in_g_bs`<sup>Required</sup> <a name="memory_per_oracle_compute_unit_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memoryPerOracleComputeUnitInGBs"></a>

```python
memory_per_oracle_compute_unit_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_size_in_g_bs`<sup>Required</sup> <a name="memory_size_in_g_bs" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.memorySizeInGBs"></a>

```python
memory_size_in_g_bs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `non_provisionable_autonomous_container_databases`<sup>Required</sup> <a name="non_provisionable_autonomous_container_databases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.nonProvisionableAutonomousContainerDatabases"></a>

```python
non_provisionable_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `oci_resource_anchor_name`<sup>Required</sup> <a name="oci_resource_anchor_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociResourceAnchorName"></a>

```python
oci_resource_anchor_name: str
```

- *Type:* str

---

##### `oci_url`<sup>Required</sup> <a name="oci_url" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.ociUrl"></a>

```python
oci_url: str
```

- *Type:* str

---

##### `odb_network_id`<sup>Required</sup> <a name="odb_network_id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.odbNetworkId"></a>

```python
odb_network_id: str
```

- *Type:* str

---

##### `provisionable_autonomous_container_databases`<sup>Required</sup> <a name="provisionable_autonomous_container_databases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionableAutonomousContainerDatabases"></a>

```python
provisionable_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_autonomous_container_databases`<sup>Required</sup> <a name="provisioned_autonomous_container_databases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedAutonomousContainerDatabases"></a>

```python
provisioned_autonomous_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provisioned_cpus`<sup>Required</sup> <a name="provisioned_cpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.provisionedCpus"></a>

```python
provisioned_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reclaimable_cpus`<sup>Required</sup> <a name="reclaimable_cpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reclaimableCpus"></a>

```python
reclaimable_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reserved_cpus`<sup>Required</sup> <a name="reserved_cpus" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.reservedCpus"></a>

```python
reserved_cpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_non_tls`<sup>Required</sup> <a name="scan_listener_port_non_tls" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortNonTls"></a>

```python
scan_listener_port_non_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tls`<sup>Required</sup> <a name="scan_listener_port_tls" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.scanListenerPortTls"></a>

```python
scan_listener_port_tls: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tags"></a>

```python
tags: DataAwsccOdbCloudAutonomousVmClusterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList">DataAwsccOdbCloudAutonomousVmClusterTagsList</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `total_container_databases`<sup>Required</sup> <a name="total_container_databases" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.totalContainerDatabases"></a>

```python
total_container_databases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbCloudAutonomousVmClusterConfig <a name="DataAwsccOdbCloudAutonomousVmClusterConfig" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/odb_cloud_autonomous_vm_cluster#id DataAwsccOdbCloudAutonomousVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbCloudAutonomousVmClusterIamRoles <a name="DataAwsccOdbCloudAutonomousVmClusterIamRoles" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles()
```


### DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow <a name="DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow()
```


### DataAwsccOdbCloudAutonomousVmClusterTags <a name="DataAwsccOdbCloudAutonomousVmClusterTags" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbCloudAutonomousVmClusterIamRolesList <a name="DataAwsccOdbCloudAutonomousVmClusterIamRolesList" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference <a name="DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration">aws_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles">DataAwsccOdbCloudAutonomousVmClusterIamRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_integration`<sup>Required</sup> <a name="aws_integration" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.awsIntegration"></a>

```python
aws_integration: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudAutonomousVmClusterIamRoles
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterIamRoles">DataAwsccOdbCloudAutonomousVmClusterIamRoles</a>

---


### DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference <a name="DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow">DataAwsccOdbCloudAutonomousVmClusterMaintenanceWindow</a>

---


### DataAwsccOdbCloudAutonomousVmClusterTagsList <a name="DataAwsccOdbCloudAutonomousVmClusterTagsList" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference <a name="DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_odb_cloud_autonomous_vm_cluster

dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags">DataAwsccOdbCloudAutonomousVmClusterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccOdbCloudAutonomousVmClusterTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudAutonomousVmCluster.DataAwsccOdbCloudAutonomousVmClusterTags">DataAwsccOdbCloudAutonomousVmClusterTags</a>

---



