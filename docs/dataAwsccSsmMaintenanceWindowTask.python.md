# `dataAwsccSsmMaintenanceWindowTask` Submodule <a name="`dataAwsccSsmMaintenanceWindowTask` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmMaintenanceWindowTask <a name="DataAwsccSsmMaintenanceWindowTask" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task awscc_ssm_maintenance_window_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task#id DataAwsccSsmMaintenanceWindowTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindowTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSsmMaintenanceWindowTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSsmMaintenanceWindowTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmMaintenanceWindowTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cutoffBehavior">cutoff_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.loggingInfo">logging_info</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference">DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxConcurrency">max_concurrency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxErrors">max_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList">DataAwsccSsmMaintenanceWindowTaskTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskArn">task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskInvocationParameters">task_invocation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskParameters">task_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowId">window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowTaskId">window_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `cutoff_behavior`<sup>Required</sup> <a name="cutoff_behavior" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.cutoffBehavior"></a>

```python
cutoff_behavior: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `logging_info`<sup>Required</sup> <a name="logging_info" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.loggingInfo"></a>

```python
logging_info: DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference">DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference</a>

---

##### `max_concurrency`<sup>Required</sup> <a name="max_concurrency" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxConcurrency"></a>

```python
max_concurrency: str
```

- *Type:* str

---

##### `max_errors`<sup>Required</sup> <a name="max_errors" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.maxErrors"></a>

```python
max_errors: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.targets"></a>

```python
targets: DataAwsccSsmMaintenanceWindowTaskTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList">DataAwsccSsmMaintenanceWindowTaskTargetsList</a>

---

##### `task_arn`<sup>Required</sup> <a name="task_arn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskArn"></a>

```python
task_arn: str
```

- *Type:* str

---

##### `task_invocation_parameters`<sup>Required</sup> <a name="task_invocation_parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskInvocationParameters"></a>

```python
task_invocation_parameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference</a>

---

##### `task_parameters`<sup>Required</sup> <a name="task_parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskParameters"></a>

```python
task_parameters: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowId"></a>

```python
window_id: str
```

- *Type:* str

---

##### `window_task_id`<sup>Required</sup> <a name="window_task_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.windowTaskId"></a>

```python
window_task_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmMaintenanceWindowTaskConfig <a name="DataAwsccSsmMaintenanceWindowTaskConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window_task#id DataAwsccSsmMaintenanceWindowTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmMaintenanceWindowTaskLoggingInfo <a name="DataAwsccSsmMaintenanceWindowTaskLoggingInfo" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo()
```


### DataAwsccSsmMaintenanceWindowTaskTargets <a name="DataAwsccSsmMaintenanceWindowTaskTargets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets()
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters()
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters()
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters()
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters()
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig()
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig()
```


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo">DataAwsccSsmMaintenanceWindowTaskLoggingInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskLoggingInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskLoggingInfo">DataAwsccSsmMaintenanceWindowTaskLoggingInfo</a>

---


### DataAwsccSsmMaintenanceWindowTaskTargetsList <a name="DataAwsccSsmMaintenanceWindowTaskTargetsList" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets">DataAwsccSsmMaintenanceWindowTaskTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTargets">DataAwsccSsmMaintenanceWindowTaskTargets</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext">client_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_context`<sup>Required</sup> <a name="client_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.clientContext"></a>

```python
client_context: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName">cloudwatch_log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled">cloudwatch_output_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_name`<sup>Required</sup> <a name="cloudwatch_log_group_name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchLogGroupName"></a>

```python
cloudwatch_log_group_name: str
```

- *Type:* str

---

##### `cloudwatch_output_enabled`<sup>Required</sup> <a name="cloudwatch_output_enabled" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.cloudwatchOutputEnabled"></a>

```python
cloudwatch_output_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfig</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn">notification_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents">notification_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType">notification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notification_arn`<sup>Required</sup> <a name="notification_arn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationArn"></a>

```python
notification_arn: str
```

- *Type:* str

---

##### `notification_events`<sup>Required</sup> <a name="notification_events" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationEvents"></a>

```python
notification_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `notification_type`<sup>Required</sup> <a name="notification_type" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.notificationType"></a>

```python
notification_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfig</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig">cloudwatch_output_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash">document_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType">document_hash_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion">document_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig">notification_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName">output_s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix">output_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds">timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_output_config`<sup>Required</sup> <a name="cloudwatch_output_config" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.cloudwatchOutputConfig"></a>

```python
cloudwatch_output_config: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersCloudwatchOutputConfigOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `document_hash`<sup>Required</sup> <a name="document_hash" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHash"></a>

```python
document_hash: str
```

- *Type:* str

---

##### `document_hash_type`<sup>Required</sup> <a name="document_hash_type" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentHashType"></a>

```python
document_hash_type: str
```

- *Type:* str

---

##### `document_version`<sup>Required</sup> <a name="document_version" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.documentVersion"></a>

```python
document_version: str
```

- *Type:* str

---

##### `notification_config`<sup>Required</sup> <a name="notification_config" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.notificationConfig"></a>

```python
notification_config: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersNotificationConfigOutputReference</a>

---

##### `output_s3_bucket_name`<sup>Required</sup> <a name="output_s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3BucketName"></a>

```python
output_s3_bucket_name: str
```

- *Type:* str

---

##### `output_s3_key_prefix`<sup>Required</sup> <a name="output_s3_key_prefix" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.outputS3KeyPrefix"></a>

```python
output_s3_key_prefix: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `timeout_seconds`<sup>Required</sup> <a name="timeout_seconds" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.timeoutSeconds"></a>

```python
timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParameters</a>

---


### DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference <a name="DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window_task

dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters">maintenance_window_automation_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters">maintenance_window_lambda_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters">maintenance_window_run_command_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters">maintenance_window_step_functions_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_window_automation_parameters`<sup>Required</sup> <a name="maintenance_window_automation_parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowAutomationParameters"></a>

```python
maintenance_window_automation_parameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowAutomationParametersOutputReference</a>

---

##### `maintenance_window_lambda_parameters`<sup>Required</sup> <a name="maintenance_window_lambda_parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowLambdaParameters"></a>

```python
maintenance_window_lambda_parameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowLambdaParametersOutputReference</a>

---

##### `maintenance_window_run_command_parameters`<sup>Required</sup> <a name="maintenance_window_run_command_parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowRunCommandParameters"></a>

```python
maintenance_window_run_command_parameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowRunCommandParametersOutputReference</a>

---

##### `maintenance_window_step_functions_parameters`<sup>Required</sup> <a name="maintenance_window_step_functions_parameters" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.maintenanceWindowStepFunctionsParameters"></a>

```python
maintenance_window_step_functions_parameters: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersMaintenanceWindowStepFunctionsParametersOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindowTask.DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters">DataAwsccSsmMaintenanceWindowTaskTaskInvocationParameters</a>

---



