# `dataAwsccSecuritylakeDataLake` Submodule <a name="`dataAwsccSecuritylakeDataLake` Submodule" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecuritylakeDataLake <a name="DataAwsccSecuritylakeDataLake" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securitylake_data_lake awscc_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securitylake_data_lake#id DataAwsccSecuritylakeDataLake#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccSecuritylakeDataLake resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccSecuritylakeDataLake resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccSecuritylakeDataLake to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccSecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference">DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycleConfiguration">lifecycle_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.metaStoreManagerRoleArn">meta_store_manager_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.replicationConfiguration">replication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference">DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList">DataAwsccSecuritylakeDataLakeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.encryptionConfiguration"></a>

```python
encryption_configuration: DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference">DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference</a>

---

##### `lifecycle_configuration`<sup>Required</sup> <a name="lifecycle_configuration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.lifecycleConfiguration"></a>

```python
lifecycle_configuration: DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference</a>

---

##### `meta_store_manager_role_arn`<sup>Required</sup> <a name="meta_store_manager_role_arn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```python
meta_store_manager_role_arn: str
```

- *Type:* str

---

##### `replication_configuration`<sup>Required</sup> <a name="replication_configuration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.replicationConfiguration"></a>

```python
replication_configuration: DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference">DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference</a>

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tags"></a>

```python
tags: DataAwsccSecuritylakeDataLakeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList">DataAwsccSecuritylakeDataLakeTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLake.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecuritylakeDataLakeConfig <a name="DataAwsccSecuritylakeDataLakeConfig" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/securitylake_data_lake#id DataAwsccSecuritylakeDataLake#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecuritylakeDataLakeEncryptionConfiguration <a name="DataAwsccSecuritylakeDataLakeEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration()
```


### DataAwsccSecuritylakeDataLakeLifecycleConfiguration <a name="DataAwsccSecuritylakeDataLakeLifecycleConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration()
```


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration()
```


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions()
```


### DataAwsccSecuritylakeDataLakeReplicationConfiguration <a name="DataAwsccSecuritylakeDataLakeReplicationConfiguration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration()
```


### DataAwsccSecuritylakeDataLakeTags <a name="DataAwsccSecuritylakeDataLakeTags" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference <a name="DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration">DataAwsccSecuritylakeDataLakeEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeDataLakeEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeEncryptionConfiguration">DataAwsccSecuritylakeDataLakeEncryptionConfiguration</a>

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpiration</a>

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions">transitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration">DataAwsccSecuritylakeDataLakeLifecycleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.expiration"></a>

```python
expiration: DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference">DataAwsccSecuritylakeDataLakeLifecycleConfigurationExpirationOutputReference</a>

---

##### `transitions`<sup>Required</sup> <a name="transitions" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.transitions"></a>

```python
transitions: DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeDataLakeLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfiguration">DataAwsccSecuritylakeDataLakeLifecycleConfiguration</a>

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference <a name="DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions">DataAwsccSecuritylakeDataLakeLifecycleConfigurationTransitions</a>

---


### DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference <a name="DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration">DataAwsccSecuritylakeDataLakeReplicationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeDataLakeReplicationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeReplicationConfiguration">DataAwsccSecuritylakeDataLakeReplicationConfiguration</a>

---


### DataAwsccSecuritylakeDataLakeTagsList <a name="DataAwsccSecuritylakeDataLakeTagsList" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccSecuritylakeDataLakeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccSecuritylakeDataLakeTagsOutputReference <a name="DataAwsccSecuritylakeDataLakeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_securitylake_data_lake

dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags">DataAwsccSecuritylakeDataLakeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccSecuritylakeDataLakeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecuritylakeDataLake.DataAwsccSecuritylakeDataLakeTags">DataAwsccSecuritylakeDataLakeTags</a>

---



