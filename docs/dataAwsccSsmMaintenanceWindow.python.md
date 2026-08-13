# `dataAwsccSsmMaintenanceWindow` Submodule <a name="`dataAwsccSsmMaintenanceWindow` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmMaintenanceWindow <a name="DataAwsccSsmMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window awscc_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window#id DataAwsccSsmMaintenanceWindow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSsmMaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSsmMaintenanceWindow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSsmMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.allowUnassociatedTargets">allow_unassociated_targets</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cutoff">cutoff</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleOffset">schedule_offset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleTimezone">schedule_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList">DataAwsccSsmMaintenanceWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.windowId">window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `allow_unassociated_targets`<sup>Required</sup> <a name="allow_unassociated_targets" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```python
allow_unassociated_targets: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.cutoff"></a>

```python
cutoff: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `schedule_offset`<sup>Required</sup> <a name="schedule_offset" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleOffset"></a>

```python
schedule_offset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schedule_timezone`<sup>Required</sup> <a name="schedule_timezone" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.scheduleTimezone"></a>

```python
schedule_timezone: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tags"></a>

```python
tags: DataAwsccSsmMaintenanceWindowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList">DataAwsccSsmMaintenanceWindowTagsList</a>

---

##### `window_id`<sup>Required</sup> <a name="window_id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.windowId"></a>

```python
window_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmMaintenanceWindowConfig <a name="DataAwsccSsmMaintenanceWindowConfig" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssm_maintenance_window#id DataAwsccSsmMaintenanceWindow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmMaintenanceWindowTags <a name="DataAwsccSsmMaintenanceWindowTags" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmMaintenanceWindowTagsList <a name="DataAwsccSsmMaintenanceWindowTagsList" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSsmMaintenanceWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSsmMaintenanceWindowTagsOutputReference <a name="DataAwsccSsmMaintenanceWindowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ssm_maintenance_window

dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags">DataAwsccSsmMaintenanceWindowTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSsmMaintenanceWindowTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmMaintenanceWindow.DataAwsccSsmMaintenanceWindowTags">DataAwsccSsmMaintenanceWindowTags</a>

---



