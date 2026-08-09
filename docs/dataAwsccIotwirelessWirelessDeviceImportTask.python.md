# `dataAwsccIotwirelessWirelessDeviceImportTask` Submodule <a name="`dataAwsccIotwirelessWirelessDeviceImportTask` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessWirelessDeviceImportTask <a name="DataAwsccIotwirelessWirelessDeviceImportTask" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_device_import_task#id DataAwsccIotwirelessWirelessDeviceImportTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotwirelessWirelessDeviceImportTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotwirelessWirelessDeviceImportTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessWirelessDeviceImportTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.destinationName">destination_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount">failed_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount">initialized_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount">onboarded_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount">pending_imported_devices_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.statusReason">status_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList">DataAwsccIotwirelessWirelessDeviceImportTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId">wireless_device_import_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `destination_name`<sup>Required</sup> <a name="destination_name" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.destinationName"></a>

```python
destination_name: str
```

- *Type:* str

---

##### `failed_imported_devices_count`<sup>Required</sup> <a name="failed_imported_devices_count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount"></a>

```python
failed_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initialized_imported_devices_count`<sup>Required</sup> <a name="initialized_imported_devices_count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount"></a>

```python
initialized_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `onboarded_imported_devices_count`<sup>Required</sup> <a name="onboarded_imported_devices_count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount"></a>

```python
onboarded_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_imported_devices_count`<sup>Required</sup> <a name="pending_imported_devices_count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount"></a>

```python
pending_imported_devices_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.sidewalk"></a>

```python
sidewalk: DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_reason`<sup>Required</sup> <a name="status_reason" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.statusReason"></a>

```python
status_reason: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tags"></a>

```python
tags: DataAwsccIotwirelessWirelessDeviceImportTaskTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList">DataAwsccIotwirelessWirelessDeviceImportTaskTagsList</a>

---

##### `wireless_device_import_task_id`<sup>Required</sup> <a name="wireless_device_import_task_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId"></a>

```python
wireless_device_import_task_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessWirelessDeviceImportTaskConfig <a name="DataAwsccIotwirelessWirelessDeviceImportTaskConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotwireless_wireless_device_import_task#id DataAwsccIotwirelessWirelessDeviceImportTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk <a name="DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk()
```


### DataAwsccIotwirelessWirelessDeviceImportTaskTags <a name="DataAwsccIotwirelessWirelessDeviceImportTaskTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference <a name="DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile">device_creation_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList">device_creation_file_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn">sidewalk_manufacturing_sn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_creation_file`<sup>Required</sup> <a name="device_creation_file" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile"></a>

```python
device_creation_file: str
```

- *Type:* str

---

##### `device_creation_file_list`<sup>Required</sup> <a name="device_creation_file_list" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList"></a>

```python
device_creation_file_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `sidewalk_manufacturing_sn`<sup>Required</sup> <a name="sidewalk_manufacturing_sn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn"></a>

```python
sidewalk_manufacturing_sn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk">DataAwsccIotwirelessWirelessDeviceImportTaskSidewalk</a>

---


### DataAwsccIotwirelessWirelessDeviceImportTaskTagsList <a name="DataAwsccIotwirelessWirelessDeviceImportTaskTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_wireless_device_import_task

dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags">DataAwsccIotwirelessWirelessDeviceImportTaskTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessWirelessDeviceImportTaskTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDeviceImportTask.DataAwsccIotwirelessWirelessDeviceImportTaskTags">DataAwsccIotwirelessWirelessDeviceImportTaskTags</a>

---



