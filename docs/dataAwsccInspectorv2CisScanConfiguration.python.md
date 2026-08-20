# `dataAwsccInspectorv2CisScanConfiguration` Submodule <a name="`dataAwsccInspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CisScanConfiguration <a name="DataAwsccInspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration#id DataAwsccInspectorv2CisScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccInspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccInspectorv2CisScanConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccInspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName">scan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `scan_name`<sup>Required</sup> <a name="scan_name" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.scanName"></a>

```python
scan_name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.schedule"></a>

```python
schedule: DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktn.StringMap

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.targets"></a>

```python
targets: DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference">DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CisScanConfigurationConfig <a name="DataAwsccInspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_cis_scan_configuration#id DataAwsccInspectorv2CisScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CisScanConfigurationSchedule <a name="DataAwsccInspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule()
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDaily <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily()
```


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime()
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly()
```


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime()
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeekly <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly()
```


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime()
```


### DataAwsccInspectorv2CisScanConfigurationTargets <a name="DataAwsccInspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```python
start_time: DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationScheduleDaily
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDaily">DataAwsccInspectorv2CisScanConfigurationScheduleDaily</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```python
start_time: DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationScheduleMonthly
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthly">DataAwsccInspectorv2CisScanConfigurationScheduleMonthly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">monthly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">one_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```python
daily: DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `monthly`<sup>Required</sup> <a name="monthly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```python
monthly: DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `one_time`<sup>Required</sup> <a name="one_time" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```python
one_time: str
```

- *Type:* str

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```python
weekly: DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationSchedule">DataAwsccInspectorv2CisScanConfigurationSchedule</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">start_time</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```python
days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```python
start_time: DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationScheduleWeekly
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeekly">DataAwsccInspectorv2CisScanConfigurationScheduleWeekly</a>

---


### DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_of_day`<sup>Required</sup> <a name="time_of_day" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```python
time_of_day: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime">DataAwsccInspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference <a name="DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_inspectorv2_cis_scan_configuration

dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">target_resource_tags</a></code> | <code>cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_ids`<sup>Required</sup> <a name="account_ids" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```python
account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_resource_tags`<sup>Required</sup> <a name="target_resource_tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```python
target_resource_tags: StringListMap
```

- *Type:* cdktn.StringListMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccInspectorv2CisScanConfigurationTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CisScanConfiguration.DataAwsccInspectorv2CisScanConfigurationTargets">DataAwsccInspectorv2CisScanConfigurationTargets</a>

---



