# `dataAwsccQuicksightCustomPermissions` Submodule <a name="`dataAwsccQuicksightCustomPermissions` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightCustomPermissions <a name="DataAwsccQuicksightCustomPermissions" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions awscc_quicksight_custom_permissions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions#id DataAwsccQuicksightCustomPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccQuicksightCustomPermissions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccQuicksightCustomPermissions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccQuicksightCustomPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightCustomPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName">custom_permissions_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.capabilities"></a>

```python
capabilities: DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference">DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference</a>

---

##### `custom_permissions_name`<sup>Required</sup> <a name="custom_permissions_name" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.customPermissionsName"></a>

```python
custom_permissions_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tags"></a>

```python
tags: DataAwsccQuicksightCustomPermissionsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList">DataAwsccQuicksightCustomPermissionsTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightCustomPermissionsCapabilities <a name="DataAwsccQuicksightCustomPermissionsCapabilities" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities()
```


### DataAwsccQuicksightCustomPermissionsConfig <a name="DataAwsccQuicksightCustomPermissionsConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/data-sources/quicksight_custom_permissions#id DataAwsccQuicksightCustomPermissions#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightCustomPermissionsTags <a name="DataAwsccQuicksightCustomPermissionsTags" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference <a name="DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore">access_apps_native_data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses">add_or_run_anomaly_detection_for_analyses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.adobeAnalyticsDataSource">adobe_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction">amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction">amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction">amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction">amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis">analysis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests">approve_flow_share_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps">apps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction">asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.athenaDataSource">athena_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.auroraDataSource">aurora_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate">automate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction">bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bedrockManagedKnowledgeBase">bedrock_managed_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction">box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxKnowledgeBase">box_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ">build_calculated_field_with_q</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction">canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent">chat_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction">comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction">comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction">confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceKnowledgeBase">confluence_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAdobeAnalyticsDataSource">create_adobe_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction">create_and_update_amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction">create_and_update_amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction">create_and_update_amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction">create_and_update_amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps">create_and_update_apps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction">create_and_update_asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction">create_and_update_bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBedrockManagedKnowledgeBase">create_and_update_bedrock_managed_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction">create_and_update_box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxKnowledgeBase">create_and_update_box_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction">create_and_update_canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction">create_and_update_comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction">create_and_update_comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction">create_and_update_confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceKnowledgeBase">create_and_update_confluence_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports">create_and_update_dashboard_email_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets">create_and_update_datasets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources">create_and_update_data_sources</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction">create_and_update_fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction">create_and_update_generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction">create_and_update_github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction">create_and_update_google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleDriveKnowledgeBase">create_and_update_google_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction">create_and_update_hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction">create_and_update_hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIdcKnowledgeBase">create_and_update_idc_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction">create_and_update_intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction">create_and_update_jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases">create_and_update_knowledge_bases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction">create_and_update_linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction">create_and_update_mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction">create_and_update_monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction">create_and_update_ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction">create_and_update_ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction">create_and_update_new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction">create_and_update_notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction">create_and_update_one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveKnowledgeBase">create_and_update_one_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction">create_and_update_open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction">create_and_update_pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateQBusinessKnowledgeBase">create_and_update_q_business_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateS3KnowledgeBase">create_and_update_s3_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction">create_and_update_salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction">create_and_update_sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction">create_and_update_sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction">create_and_update_sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction">create_and_update_sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction">create_and_update_sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction">create_and_update_sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction">create_and_update_sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction">create_and_update_service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction">create_and_update_share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointKnowledgeBase">create_and_update_share_point_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction">create_and_update_slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction">create_and_update_smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction">create_and_update_textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes">create_and_update_themes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts">create_and_update_threshold_alerts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateWebCrawlerKnowledgeBase">create_and_update_web_crawler_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction">create_and_update_zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAthenaDataSource">create_athena_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAuroraDataSource">create_aurora_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents">create_chat_agents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ">create_dashboard_executive_summary_with_q</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDatabricksDataSource">create_databricks_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDb2DataSource">create_db2_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDenodoDataSource">create_denodo_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDocumentDbDataSource">create_document_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDremioDataSource">create_dremio_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDynamoDbDataSource">create_dynamo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createExasolDataSource">create_exasol_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createFileDataSource">create_file_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGitHubDataSource">create_git_hub_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleAnalyticsDataSource">create_google_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleBigQueryDataSource">create_google_big_query_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleSheetsDataSource">create_google_sheets_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createImpalaDataSource">create_impala_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createJiraDataSource">create_jira_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMariaDbDataSource">create_maria_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoAtlasDataSource">create_mongo_atlas_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoDbDataSource">create_mongo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMySqlDataSource">create_my_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOpenSearchDataSource">create_open_search_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOracleDataSource">create_oracle_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPayPalDataSource">create_pay_pal_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPostgreSqlDataSource">create_postgre_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPrestoDataSource">create_presto_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRadiantDataSource">create_radiant_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRdsDataSource">create_rds_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftAutoDiscoveredDataSource">create_redshift_auto_discovered_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftManualDataSource">create_redshift_manual_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3AnalyticsDataSource">create_s3_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3DataSource">create_s3_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3TablesDataSource">create_s3_tables_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSalesforceDataSource">create_salesforce_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSapHanaDataSource">create_sap_hana_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createServiceNowDataSource">create_service_now_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders">create_shared_folders</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSnowflakeDataSource">create_snowflake_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces">create_spaces</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSparkDataSource">create_spark_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset">create_spice_dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSqlServerDataSource">create_sql_server_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSquareDataSource">create_square_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createStarburstDataSource">create_starburst_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTeradataDataSource">create_teradata_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTimestreamDataSource">create_timestream_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTrinoDataSource">create_trino_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTwitterDataSource">create_twitter_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard">dashboard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.databricksDataSource">databricks_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.db2DataSource">db2_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.denodoDataSource">denodo_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.documentDbDataSource">document_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dremioDataSource">dremio_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dynamoDbDataSource">dynamo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ">edit_visual_with_q</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exasolDataSource">exasol_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv">export_to_csv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports">export_to_csv_in_scheduled_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel">export_to_excel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports">export_to_excel_in_scheduled_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf">export_to_pdf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports">export_to_pdf_in_scheduled_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension">extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction">fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fileDataSource">file_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow">flow</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction">generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction">github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.gitHubDataSource">git_hub_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleAnalyticsDataSource">google_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleBigQueryDataSource">google_big_query_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction">google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleDriveKnowledgeBase">google_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleSheetsDataSource">google_sheets_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction">hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction">hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.idcKnowledgeBase">idc_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.impalaDataSource">impala_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.inboundEmailTrigger">inbound_email_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail">include_content_in_scheduled_reports_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction">intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference">invoke_apps_ai_inference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction">jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraDataSource">jira_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase">knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction">linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders">manage_shared_folders</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mariaDbDataSource">maria_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction">mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction">monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoAtlasDataSource">mongo_atlas_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoDbDataSource">mongo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction">ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction">ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mySqlDataSource">my_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction">new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction">notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction">one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveKnowledgeBase">one_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction">open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openSearchDataSource">open_search_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oracleDataSource">oracle_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction">pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.payPalDataSource">pay_pal_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask">perform_flow_ui_task</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.postgreSqlDataSource">postgre_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.prestoDataSource">presto_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports">print_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval">publish_without_approval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.qBusinessKnowledgeBase">q_business_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.quickEventTrigger">quick_event_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.radiantDataSource">radiant_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.rdsDataSource">rds_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftAutoDiscoveredDataSource">redshift_auto_discovered_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftManualDataSource">redshift_manual_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders">rename_shared_folders</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research">research</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3AnalyticsDataSource">s3_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3DataSource">s3_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3KnowledgeBase">s3_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3TablesDataSource">s3_tables_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction">salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceDataSource">salesforce_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction">sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction">sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction">sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction">sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapHanaDataSource">sap_hana_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction">sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction">sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction">sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.scheduleTrigger">schedule_trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction">service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowDataSource">service_now_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAdobeAnalyticsDataSource">share_adobe_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction">share_amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction">share_amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction">share_amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction">share_amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses">share_analyses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps">share_apps</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction">share_asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAthenaDataSource">share_athena_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAuroraDataSource">share_aurora_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction">share_bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBedrockManagedKnowledgeBase">share_bedrock_managed_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction">share_box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxKnowledgeBase">share_box_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction">share_canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents">share_chat_agents</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction">share_comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction">share_comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction">share_confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceKnowledgeBase">share_confluence_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards">share_dashboards</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatabricksDataSource">share_databricks_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets">share_datasets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources">share_data_sources</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDb2DataSource">share_db2_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDenodoDataSource">share_denodo_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDocumentDbDataSource">share_document_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDremioDataSource">share_dremio_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDynamoDbDataSource">share_dynamo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareExasolDataSource">share_exasol_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction">share_fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFileDataSource">share_file_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction">share_generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction">share_github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGitHubDataSource">share_git_hub_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleAnalyticsDataSource">share_google_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleBigQueryDataSource">share_google_big_query_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction">share_google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleDriveKnowledgeBase">share_google_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleSheetsDataSource">share_google_sheets_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction">share_hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction">share_hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIdcKnowledgeBase">share_idc_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareImpalaDataSource">share_impala_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction">share_intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction">share_jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraDataSource">share_jira_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases">share_knowledge_bases</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction">share_linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMariaDbDataSource">share_maria_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction">share_mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction">share_monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoAtlasDataSource">share_mongo_atlas_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoDbDataSource">share_mongo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction">share_ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction">share_ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMySqlDataSource">share_my_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction">share_new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction">share_notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction">share_one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveKnowledgeBase">share_one_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction">share_open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenSearchDataSource">share_open_search_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOracleDataSource">share_oracle_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction">share_pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePayPalDataSource">share_pay_pal_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction">share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointKnowledgeBase">share_point_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePostgreSqlDataSource">share_postgre_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePrestoDataSource">share_presto_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareQBusinessKnowledgeBase">share_q_business_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRadiantDataSource">share_radiant_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRdsDataSource">share_rds_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftAutoDiscoveredDataSource">share_redshift_auto_discovered_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftManualDataSource">share_redshift_manual_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3AnalyticsDataSource">share_s3_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3DataSource">share_s3_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3KnowledgeBase">share_s3_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3TablesDataSource">share_s3_tables_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction">share_salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceDataSource">share_salesforce_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction">share_sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction">share_sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction">share_sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction">share_sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapHanaDataSource">share_sap_hana_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction">share_sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction">share_sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction">share_sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction">share_service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowDataSource">share_service_now_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction">share_share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointKnowledgeBase">share_share_point_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction">share_slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction">share_smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSnowflakeDataSource">share_snowflake_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces">share_spaces</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSparkDataSource">share_spark_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSqlServerDataSource">share_sql_server_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSquareDataSource">share_square_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareStarburstDataSource">share_starburst_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTeradataDataSource">share_teradata_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction">share_textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTimestreamDataSource">share_timestream_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTrinoDataSource">share_trino_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTwitterDataSource">share_twitter_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareWebCrawlerKnowledgeBase">share_web_crawler_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction">share_zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction">slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction">smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.snowflakeDataSource">snowflake_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space">space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sparkDataSource">spark_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sqlServerDataSource">sql_server_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.squareDataSource">square_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.starburstDataSource">starburst_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports">subscribe_dashboard_email_reports</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.teradataDataSource">teradata_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction">textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.timestreamDataSource">timestream_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trinoDataSource">trino_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.twitterDataSource">twitter_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAdobeAnalyticsDataSource">update_adobe_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAthenaDataSource">update_athena_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAuroraDataSource">update_aurora_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDatabricksDataSource">update_databricks_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDb2DataSource">update_db2_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDenodoDataSource">update_denodo_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDocumentDbDataSource">update_document_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDremioDataSource">update_dremio_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDynamoDbDataSource">update_dynamo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateExasolDataSource">update_exasol_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateFileDataSource">update_file_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGitHubDataSource">update_git_hub_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleAnalyticsDataSource">update_google_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleBigQueryDataSource">update_google_big_query_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleSheetsDataSource">update_google_sheets_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateImpalaDataSource">update_impala_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateJiraDataSource">update_jira_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMariaDbDataSource">update_maria_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoAtlasDataSource">update_mongo_atlas_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoDbDataSource">update_mongo_db_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMySqlDataSource">update_my_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOpenSearchDataSource">update_open_search_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOracleDataSource">update_oracle_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePayPalDataSource">update_pay_pal_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePostgreSqlDataSource">update_postgre_sql_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePrestoDataSource">update_presto_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRadiantDataSource">update_radiant_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRdsDataSource">update_rds_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftAutoDiscoveredDataSource">update_redshift_auto_discovered_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftManualDataSource">update_redshift_manual_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3AnalyticsDataSource">update_s3_analytics_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3DataSource">update_s3_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3TablesDataSource">update_s3_tables_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSalesforceDataSource">update_salesforce_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSapHanaDataSource">update_sap_hana_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateServiceNowDataSource">update_service_now_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSnowflakeDataSource">update_snowflake_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSparkDataSource">update_spark_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSqlServerDataSource">update_sql_server_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSquareDataSource">update_square_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateStarburstDataSource">update_starburst_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTeradataDataSource">update_teradata_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTimestreamDataSource">update_timestream_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTrinoDataSource">update_trino_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTwitterDataSource">update_twitter_data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch">use_agent_web_search</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction">use_amazon_bedrock_ars_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction">use_amazon_bedrock_fs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction">use_amazon_bedrock_krs_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction">use_amazon_s_three_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction">use_asana_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction">use_bamboo_hr_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockManagedKnowledgeBase">use_bedrock_managed_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels">use_bedrock_models</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction">use_box_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxKnowledgeBase">use_box_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBrowserExtension">use_browser_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction">use_canva_agent_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction">use_comprehend_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction">use_comprehend_medical_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction">use_confluence_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceKnowledgeBase">use_confluence_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useExcelAddInExtension">use_excel_add_in_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction">use_fact_set_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction">use_generic_http_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction">use_github_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction">use_google_calendar_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleDriveKnowledgeBase">use_google_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction">use_hubspot_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction">use_hugging_face_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIdcKnowledgeBase">use_idc_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction">use_intercom_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction">use_jira_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction">use_linear_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction">use_mcp_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction">use_monday_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction">use_ms_exchange_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction">use_ms_teams_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction">use_new_relic_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction">use_notion_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction">use_one_drive_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveKnowledgeBase">use_one_drive_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction">use_open_api_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOutlookAddInExtension">use_outlook_add_in_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction">use_pager_duty_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePowerpointAddInExtension">use_powerpoint_add_in_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useQBusinessKnowledgeBase">use_q_business_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useS3KnowledgeBase">use_s3_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction">use_salesforce_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction">use_sand_p_global_energy_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction">use_sand_pgmi_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction">use_sap_bill_of_material_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction">use_sap_business_partner_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction">use_sap_material_stock_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction">use_sap_physical_inventory_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction">use_sap_product_master_data_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction">use_service_now_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction">use_share_point_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointKnowledgeBase">use_share_point_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction">use_slack_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction">use_smartsheet_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction">use_textract_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWebCrawlerKnowledgeBase">use_web_crawler_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWordAddInExtension">use_word_add_in_extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction">use_zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity">view_account_spice_capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.webCrawlerKnowledgeBase">web_crawler_knowledge_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction">zendesk_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_apps_native_data_store`<sup>Required</sup> <a name="access_apps_native_data_store" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.accessAppsNativeDataStore"></a>

```python
access_apps_native_data_store: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `add_or_run_anomaly_detection_for_analyses`<sup>Required</sup> <a name="add_or_run_anomaly_detection_for_analyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.addOrRunAnomalyDetectionForAnalyses"></a>

```python
add_or_run_anomaly_detection_for_analyses: str
```

- *Type:* str

---

##### `adobe_analytics_data_source`<sup>Required</sup> <a name="adobe_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.adobeAnalyticsDataSource"></a>

```python
adobe_analytics_data_source: str
```

- *Type:* str

---

##### `amazon_bedrock_ars_action`<sup>Required</sup> <a name="amazon_bedrock_ars_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockArsAction"></a>

```python
amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `amazon_bedrock_fs_action`<sup>Required</sup> <a name="amazon_bedrock_fs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockFsAction"></a>

```python
amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `amazon_bedrock_krs_action`<sup>Required</sup> <a name="amazon_bedrock_krs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonBedrockKrsAction"></a>

```python
amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `amazon_s_three_action`<sup>Required</sup> <a name="amazon_s_three_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.amazonSThreeAction"></a>

```python
amazon_s_three_action: str
```

- *Type:* str

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.analysis"></a>

```python
analysis: str
```

- *Type:* str

---

##### `approve_flow_share_requests`<sup>Required</sup> <a name="approve_flow_share_requests" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.approveFlowShareRequests"></a>

```python
approve_flow_share_requests: str
```

- *Type:* str

---

##### `apps`<sup>Required</sup> <a name="apps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.apps"></a>

```python
apps: str
```

- *Type:* str

---

##### `asana_action`<sup>Required</sup> <a name="asana_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.asanaAction"></a>

```python
asana_action: str
```

- *Type:* str

---

##### `athena_data_source`<sup>Required</sup> <a name="athena_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.athenaDataSource"></a>

```python
athena_data_source: str
```

- *Type:* str

---

##### `aurora_data_source`<sup>Required</sup> <a name="aurora_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.auroraDataSource"></a>

```python
aurora_data_source: str
```

- *Type:* str

---

##### `automate`<sup>Required</sup> <a name="automate" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.automate"></a>

```python
automate: str
```

- *Type:* str

---

##### `bamboo_hr_action`<sup>Required</sup> <a name="bamboo_hr_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bambooHrAction"></a>

```python
bamboo_hr_action: str
```

- *Type:* str

---

##### `bedrock_managed_knowledge_base`<sup>Required</sup> <a name="bedrock_managed_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.bedrockManagedKnowledgeBase"></a>

```python
bedrock_managed_knowledge_base: str
```

- *Type:* str

---

##### `box_agent_action`<sup>Required</sup> <a name="box_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxAgentAction"></a>

```python
box_agent_action: str
```

- *Type:* str

---

##### `box_knowledge_base`<sup>Required</sup> <a name="box_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.boxKnowledgeBase"></a>

```python
box_knowledge_base: str
```

- *Type:* str

---

##### `build_calculated_field_with_q`<sup>Required</sup> <a name="build_calculated_field_with_q" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.buildCalculatedFieldWithQ"></a>

```python
build_calculated_field_with_q: str
```

- *Type:* str

---

##### `canva_agent_action`<sup>Required</sup> <a name="canva_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.canvaAgentAction"></a>

```python
canva_agent_action: str
```

- *Type:* str

---

##### `chat_agent`<sup>Required</sup> <a name="chat_agent" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.chatAgent"></a>

```python
chat_agent: str
```

- *Type:* str

---

##### `comprehend_action`<sup>Required</sup> <a name="comprehend_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendAction"></a>

```python
comprehend_action: str
```

- *Type:* str

---

##### `comprehend_medical_action`<sup>Required</sup> <a name="comprehend_medical_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.comprehendMedicalAction"></a>

```python
comprehend_medical_action: str
```

- *Type:* str

---

##### `confluence_action`<sup>Required</sup> <a name="confluence_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceAction"></a>

```python
confluence_action: str
```

- *Type:* str

---

##### `confluence_knowledge_base`<sup>Required</sup> <a name="confluence_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.confluenceKnowledgeBase"></a>

```python
confluence_knowledge_base: str
```

- *Type:* str

---

##### `create_adobe_analytics_data_source`<sup>Required</sup> <a name="create_adobe_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAdobeAnalyticsDataSource"></a>

```python
create_adobe_analytics_data_source: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_ars_action`<sup>Required</sup> <a name="create_and_update_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockArsAction"></a>

```python
create_and_update_amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_fs_action`<sup>Required</sup> <a name="create_and_update_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockFsAction"></a>

```python
create_and_update_amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `create_and_update_amazon_bedrock_krs_action`<sup>Required</sup> <a name="create_and_update_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonBedrockKrsAction"></a>

```python
create_and_update_amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `create_and_update_amazon_s_three_action`<sup>Required</sup> <a name="create_and_update_amazon_s_three_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAmazonSThreeAction"></a>

```python
create_and_update_amazon_s_three_action: str
```

- *Type:* str

---

##### `create_and_update_apps`<sup>Required</sup> <a name="create_and_update_apps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateApps"></a>

```python
create_and_update_apps: str
```

- *Type:* str

---

##### `create_and_update_asana_action`<sup>Required</sup> <a name="create_and_update_asana_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateAsanaAction"></a>

```python
create_and_update_asana_action: str
```

- *Type:* str

---

##### `create_and_update_bamboo_hr_action`<sup>Required</sup> <a name="create_and_update_bamboo_hr_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBambooHrAction"></a>

```python
create_and_update_bamboo_hr_action: str
```

- *Type:* str

---

##### `create_and_update_bedrock_managed_knowledge_base`<sup>Required</sup> <a name="create_and_update_bedrock_managed_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBedrockManagedKnowledgeBase"></a>

```python
create_and_update_bedrock_managed_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_box_agent_action`<sup>Required</sup> <a name="create_and_update_box_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxAgentAction"></a>

```python
create_and_update_box_agent_action: str
```

- *Type:* str

---

##### `create_and_update_box_knowledge_base`<sup>Required</sup> <a name="create_and_update_box_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateBoxKnowledgeBase"></a>

```python
create_and_update_box_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_canva_agent_action`<sup>Required</sup> <a name="create_and_update_canva_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateCanvaAgentAction"></a>

```python
create_and_update_canva_agent_action: str
```

- *Type:* str

---

##### `create_and_update_comprehend_action`<sup>Required</sup> <a name="create_and_update_comprehend_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendAction"></a>

```python
create_and_update_comprehend_action: str
```

- *Type:* str

---

##### `create_and_update_comprehend_medical_action`<sup>Required</sup> <a name="create_and_update_comprehend_medical_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateComprehendMedicalAction"></a>

```python
create_and_update_comprehend_medical_action: str
```

- *Type:* str

---

##### `create_and_update_confluence_action`<sup>Required</sup> <a name="create_and_update_confluence_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceAction"></a>

```python
create_and_update_confluence_action: str
```

- *Type:* str

---

##### `create_and_update_confluence_knowledge_base`<sup>Required</sup> <a name="create_and_update_confluence_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateConfluenceKnowledgeBase"></a>

```python
create_and_update_confluence_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_dashboard_email_reports`<sup>Required</sup> <a name="create_and_update_dashboard_email_reports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDashboardEmailReports"></a>

```python
create_and_update_dashboard_email_reports: str
```

- *Type:* str

---

##### `create_and_update_datasets`<sup>Required</sup> <a name="create_and_update_datasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDatasets"></a>

```python
create_and_update_datasets: str
```

- *Type:* str

---

##### `create_and_update_data_sources`<sup>Required</sup> <a name="create_and_update_data_sources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateDataSources"></a>

```python
create_and_update_data_sources: str
```

- *Type:* str

---

##### `create_and_update_fact_set_action`<sup>Required</sup> <a name="create_and_update_fact_set_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateFactSetAction"></a>

```python
create_and_update_fact_set_action: str
```

- *Type:* str

---

##### `create_and_update_generic_http_action`<sup>Required</sup> <a name="create_and_update_generic_http_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGenericHttpAction"></a>

```python
create_and_update_generic_http_action: str
```

- *Type:* str

---

##### `create_and_update_github_action`<sup>Required</sup> <a name="create_and_update_github_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGithubAction"></a>

```python
create_and_update_github_action: str
```

- *Type:* str

---

##### `create_and_update_google_calendar_action`<sup>Required</sup> <a name="create_and_update_google_calendar_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleCalendarAction"></a>

```python
create_and_update_google_calendar_action: str
```

- *Type:* str

---

##### `create_and_update_google_drive_knowledge_base`<sup>Required</sup> <a name="create_and_update_google_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateGoogleDriveKnowledgeBase"></a>

```python
create_and_update_google_drive_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_hubspot_action`<sup>Required</sup> <a name="create_and_update_hubspot_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHubspotAction"></a>

```python
create_and_update_hubspot_action: str
```

- *Type:* str

---

##### `create_and_update_hugging_face_action`<sup>Required</sup> <a name="create_and_update_hugging_face_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateHuggingFaceAction"></a>

```python
create_and_update_hugging_face_action: str
```

- *Type:* str

---

##### `create_and_update_idc_knowledge_base`<sup>Required</sup> <a name="create_and_update_idc_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIdcKnowledgeBase"></a>

```python
create_and_update_idc_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_intercom_action`<sup>Required</sup> <a name="create_and_update_intercom_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateIntercomAction"></a>

```python
create_and_update_intercom_action: str
```

- *Type:* str

---

##### `create_and_update_jira_action`<sup>Required</sup> <a name="create_and_update_jira_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateJiraAction"></a>

```python
create_and_update_jira_action: str
```

- *Type:* str

---

##### `create_and_update_knowledge_bases`<sup>Required</sup> <a name="create_and_update_knowledge_bases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateKnowledgeBases"></a>

```python
create_and_update_knowledge_bases: str
```

- *Type:* str

---

##### `create_and_update_linear_action`<sup>Required</sup> <a name="create_and_update_linear_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateLinearAction"></a>

```python
create_and_update_linear_action: str
```

- *Type:* str

---

##### `create_and_update_mcp_action`<sup>Required</sup> <a name="create_and_update_mcp_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMcpAction"></a>

```python
create_and_update_mcp_action: str
```

- *Type:* str

---

##### `create_and_update_monday_action`<sup>Required</sup> <a name="create_and_update_monday_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMondayAction"></a>

```python
create_and_update_monday_action: str
```

- *Type:* str

---

##### `create_and_update_ms_exchange_action`<sup>Required</sup> <a name="create_and_update_ms_exchange_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsExchangeAction"></a>

```python
create_and_update_ms_exchange_action: str
```

- *Type:* str

---

##### `create_and_update_ms_teams_action`<sup>Required</sup> <a name="create_and_update_ms_teams_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateMsTeamsAction"></a>

```python
create_and_update_ms_teams_action: str
```

- *Type:* str

---

##### `create_and_update_new_relic_action`<sup>Required</sup> <a name="create_and_update_new_relic_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNewRelicAction"></a>

```python
create_and_update_new_relic_action: str
```

- *Type:* str

---

##### `create_and_update_notion_action`<sup>Required</sup> <a name="create_and_update_notion_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateNotionAction"></a>

```python
create_and_update_notion_action: str
```

- *Type:* str

---

##### `create_and_update_one_drive_action`<sup>Required</sup> <a name="create_and_update_one_drive_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveAction"></a>

```python
create_and_update_one_drive_action: str
```

- *Type:* str

---

##### `create_and_update_one_drive_knowledge_base`<sup>Required</sup> <a name="create_and_update_one_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOneDriveKnowledgeBase"></a>

```python
create_and_update_one_drive_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_open_api_action`<sup>Required</sup> <a name="create_and_update_open_api_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateOpenApiAction"></a>

```python
create_and_update_open_api_action: str
```

- *Type:* str

---

##### `create_and_update_pager_duty_action`<sup>Required</sup> <a name="create_and_update_pager_duty_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdatePagerDutyAction"></a>

```python
create_and_update_pager_duty_action: str
```

- *Type:* str

---

##### `create_and_update_q_business_knowledge_base`<sup>Required</sup> <a name="create_and_update_q_business_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateQBusinessKnowledgeBase"></a>

```python
create_and_update_q_business_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_s3_knowledge_base`<sup>Required</sup> <a name="create_and_update_s3_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateS3KnowledgeBase"></a>

```python
create_and_update_s3_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_salesforce_action`<sup>Required</sup> <a name="create_and_update_salesforce_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSalesforceAction"></a>

```python
create_and_update_salesforce_action: str
```

- *Type:* str

---

##### `create_and_update_sand_p_global_energy_action`<sup>Required</sup> <a name="create_and_update_sand_p_global_energy_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPGlobalEnergyAction"></a>

```python
create_and_update_sand_p_global_energy_action: str
```

- *Type:* str

---

##### `create_and_update_sand_pgmi_action`<sup>Required</sup> <a name="create_and_update_sand_pgmi_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSandPgmiAction"></a>

```python
create_and_update_sand_pgmi_action: str
```

- *Type:* str

---

##### `create_and_update_sap_bill_of_material_action`<sup>Required</sup> <a name="create_and_update_sap_bill_of_material_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBillOfMaterialAction"></a>

```python
create_and_update_sap_bill_of_material_action: str
```

- *Type:* str

---

##### `create_and_update_sap_business_partner_action`<sup>Required</sup> <a name="create_and_update_sap_business_partner_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapBusinessPartnerAction"></a>

```python
create_and_update_sap_business_partner_action: str
```

- *Type:* str

---

##### `create_and_update_sap_material_stock_action`<sup>Required</sup> <a name="create_and_update_sap_material_stock_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapMaterialStockAction"></a>

```python
create_and_update_sap_material_stock_action: str
```

- *Type:* str

---

##### `create_and_update_sap_physical_inventory_action`<sup>Required</sup> <a name="create_and_update_sap_physical_inventory_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapPhysicalInventoryAction"></a>

```python
create_and_update_sap_physical_inventory_action: str
```

- *Type:* str

---

##### `create_and_update_sap_product_master_data_action`<sup>Required</sup> <a name="create_and_update_sap_product_master_data_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSapProductMasterDataAction"></a>

```python
create_and_update_sap_product_master_data_action: str
```

- *Type:* str

---

##### `create_and_update_service_now_action`<sup>Required</sup> <a name="create_and_update_service_now_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateServiceNowAction"></a>

```python
create_and_update_service_now_action: str
```

- *Type:* str

---

##### `create_and_update_share_point_action`<sup>Required</sup> <a name="create_and_update_share_point_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointAction"></a>

```python
create_and_update_share_point_action: str
```

- *Type:* str

---

##### `create_and_update_share_point_knowledge_base`<sup>Required</sup> <a name="create_and_update_share_point_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSharePointKnowledgeBase"></a>

```python
create_and_update_share_point_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_slack_action`<sup>Required</sup> <a name="create_and_update_slack_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSlackAction"></a>

```python
create_and_update_slack_action: str
```

- *Type:* str

---

##### `create_and_update_smartsheet_action`<sup>Required</sup> <a name="create_and_update_smartsheet_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateSmartsheetAction"></a>

```python
create_and_update_smartsheet_action: str
```

- *Type:* str

---

##### `create_and_update_textract_action`<sup>Required</sup> <a name="create_and_update_textract_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateTextractAction"></a>

```python
create_and_update_textract_action: str
```

- *Type:* str

---

##### `create_and_update_themes`<sup>Required</sup> <a name="create_and_update_themes" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThemes"></a>

```python
create_and_update_themes: str
```

- *Type:* str

---

##### `create_and_update_threshold_alerts`<sup>Required</sup> <a name="create_and_update_threshold_alerts" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateThresholdAlerts"></a>

```python
create_and_update_threshold_alerts: str
```

- *Type:* str

---

##### `create_and_update_web_crawler_knowledge_base`<sup>Required</sup> <a name="create_and_update_web_crawler_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateWebCrawlerKnowledgeBase"></a>

```python
create_and_update_web_crawler_knowledge_base: str
```

- *Type:* str

---

##### `create_and_update_zendesk_action`<sup>Required</sup> <a name="create_and_update_zendesk_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAndUpdateZendeskAction"></a>

```python
create_and_update_zendesk_action: str
```

- *Type:* str

---

##### `create_athena_data_source`<sup>Required</sup> <a name="create_athena_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAthenaDataSource"></a>

```python
create_athena_data_source: str
```

- *Type:* str

---

##### `create_aurora_data_source`<sup>Required</sup> <a name="create_aurora_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createAuroraDataSource"></a>

```python
create_aurora_data_source: str
```

- *Type:* str

---

##### `create_chat_agents`<sup>Required</sup> <a name="create_chat_agents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createChatAgents"></a>

```python
create_chat_agents: str
```

- *Type:* str

---

##### `create_dashboard_executive_summary_with_q`<sup>Required</sup> <a name="create_dashboard_executive_summary_with_q" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDashboardExecutiveSummaryWithQ"></a>

```python
create_dashboard_executive_summary_with_q: str
```

- *Type:* str

---

##### `create_databricks_data_source`<sup>Required</sup> <a name="create_databricks_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDatabricksDataSource"></a>

```python
create_databricks_data_source: str
```

- *Type:* str

---

##### `create_db2_data_source`<sup>Required</sup> <a name="create_db2_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDb2DataSource"></a>

```python
create_db2_data_source: str
```

- *Type:* str

---

##### `create_denodo_data_source`<sup>Required</sup> <a name="create_denodo_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDenodoDataSource"></a>

```python
create_denodo_data_source: str
```

- *Type:* str

---

##### `create_document_db_data_source`<sup>Required</sup> <a name="create_document_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDocumentDbDataSource"></a>

```python
create_document_db_data_source: str
```

- *Type:* str

---

##### `create_dremio_data_source`<sup>Required</sup> <a name="create_dremio_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDremioDataSource"></a>

```python
create_dremio_data_source: str
```

- *Type:* str

---

##### `create_dynamo_db_data_source`<sup>Required</sup> <a name="create_dynamo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createDynamoDbDataSource"></a>

```python
create_dynamo_db_data_source: str
```

- *Type:* str

---

##### `create_exasol_data_source`<sup>Required</sup> <a name="create_exasol_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createExasolDataSource"></a>

```python
create_exasol_data_source: str
```

- *Type:* str

---

##### `create_file_data_source`<sup>Required</sup> <a name="create_file_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createFileDataSource"></a>

```python
create_file_data_source: str
```

- *Type:* str

---

##### `create_git_hub_data_source`<sup>Required</sup> <a name="create_git_hub_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGitHubDataSource"></a>

```python
create_git_hub_data_source: str
```

- *Type:* str

---

##### `create_google_analytics_data_source`<sup>Required</sup> <a name="create_google_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleAnalyticsDataSource"></a>

```python
create_google_analytics_data_source: str
```

- *Type:* str

---

##### `create_google_big_query_data_source`<sup>Required</sup> <a name="create_google_big_query_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleBigQueryDataSource"></a>

```python
create_google_big_query_data_source: str
```

- *Type:* str

---

##### `create_google_sheets_data_source`<sup>Required</sup> <a name="create_google_sheets_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createGoogleSheetsDataSource"></a>

```python
create_google_sheets_data_source: str
```

- *Type:* str

---

##### `create_impala_data_source`<sup>Required</sup> <a name="create_impala_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createImpalaDataSource"></a>

```python
create_impala_data_source: str
```

- *Type:* str

---

##### `create_jira_data_source`<sup>Required</sup> <a name="create_jira_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createJiraDataSource"></a>

```python
create_jira_data_source: str
```

- *Type:* str

---

##### `create_maria_db_data_source`<sup>Required</sup> <a name="create_maria_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMariaDbDataSource"></a>

```python
create_maria_db_data_source: str
```

- *Type:* str

---

##### `create_mongo_atlas_data_source`<sup>Required</sup> <a name="create_mongo_atlas_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoAtlasDataSource"></a>

```python
create_mongo_atlas_data_source: str
```

- *Type:* str

---

##### `create_mongo_db_data_source`<sup>Required</sup> <a name="create_mongo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMongoDbDataSource"></a>

```python
create_mongo_db_data_source: str
```

- *Type:* str

---

##### `create_my_sql_data_source`<sup>Required</sup> <a name="create_my_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createMySqlDataSource"></a>

```python
create_my_sql_data_source: str
```

- *Type:* str

---

##### `create_open_search_data_source`<sup>Required</sup> <a name="create_open_search_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOpenSearchDataSource"></a>

```python
create_open_search_data_source: str
```

- *Type:* str

---

##### `create_oracle_data_source`<sup>Required</sup> <a name="create_oracle_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createOracleDataSource"></a>

```python
create_oracle_data_source: str
```

- *Type:* str

---

##### `create_pay_pal_data_source`<sup>Required</sup> <a name="create_pay_pal_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPayPalDataSource"></a>

```python
create_pay_pal_data_source: str
```

- *Type:* str

---

##### `create_postgre_sql_data_source`<sup>Required</sup> <a name="create_postgre_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPostgreSqlDataSource"></a>

```python
create_postgre_sql_data_source: str
```

- *Type:* str

---

##### `create_presto_data_source`<sup>Required</sup> <a name="create_presto_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createPrestoDataSource"></a>

```python
create_presto_data_source: str
```

- *Type:* str

---

##### `create_radiant_data_source`<sup>Required</sup> <a name="create_radiant_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRadiantDataSource"></a>

```python
create_radiant_data_source: str
```

- *Type:* str

---

##### `create_rds_data_source`<sup>Required</sup> <a name="create_rds_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRdsDataSource"></a>

```python
create_rds_data_source: str
```

- *Type:* str

---

##### `create_redshift_auto_discovered_data_source`<sup>Required</sup> <a name="create_redshift_auto_discovered_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftAutoDiscoveredDataSource"></a>

```python
create_redshift_auto_discovered_data_source: str
```

- *Type:* str

---

##### `create_redshift_manual_data_source`<sup>Required</sup> <a name="create_redshift_manual_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createRedshiftManualDataSource"></a>

```python
create_redshift_manual_data_source: str
```

- *Type:* str

---

##### `create_s3_analytics_data_source`<sup>Required</sup> <a name="create_s3_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3AnalyticsDataSource"></a>

```python
create_s3_analytics_data_source: str
```

- *Type:* str

---

##### `create_s3_data_source`<sup>Required</sup> <a name="create_s3_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3DataSource"></a>

```python
create_s3_data_source: str
```

- *Type:* str

---

##### `create_s3_tables_data_source`<sup>Required</sup> <a name="create_s3_tables_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createS3TablesDataSource"></a>

```python
create_s3_tables_data_source: str
```

- *Type:* str

---

##### `create_salesforce_data_source`<sup>Required</sup> <a name="create_salesforce_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSalesforceDataSource"></a>

```python
create_salesforce_data_source: str
```

- *Type:* str

---

##### `create_sap_hana_data_source`<sup>Required</sup> <a name="create_sap_hana_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSapHanaDataSource"></a>

```python
create_sap_hana_data_source: str
```

- *Type:* str

---

##### `create_service_now_data_source`<sup>Required</sup> <a name="create_service_now_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createServiceNowDataSource"></a>

```python
create_service_now_data_source: str
```

- *Type:* str

---

##### `create_shared_folders`<sup>Required</sup> <a name="create_shared_folders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSharedFolders"></a>

```python
create_shared_folders: str
```

- *Type:* str

---

##### `create_snowflake_data_source`<sup>Required</sup> <a name="create_snowflake_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSnowflakeDataSource"></a>

```python
create_snowflake_data_source: str
```

- *Type:* str

---

##### `create_spaces`<sup>Required</sup> <a name="create_spaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpaces"></a>

```python
create_spaces: str
```

- *Type:* str

---

##### `create_spark_data_source`<sup>Required</sup> <a name="create_spark_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSparkDataSource"></a>

```python
create_spark_data_source: str
```

- *Type:* str

---

##### `create_spice_dataset`<sup>Required</sup> <a name="create_spice_dataset" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSpiceDataset"></a>

```python
create_spice_dataset: str
```

- *Type:* str

---

##### `create_sql_server_data_source`<sup>Required</sup> <a name="create_sql_server_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSqlServerDataSource"></a>

```python
create_sql_server_data_source: str
```

- *Type:* str

---

##### `create_square_data_source`<sup>Required</sup> <a name="create_square_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createSquareDataSource"></a>

```python
create_square_data_source: str
```

- *Type:* str

---

##### `create_starburst_data_source`<sup>Required</sup> <a name="create_starburst_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createStarburstDataSource"></a>

```python
create_starburst_data_source: str
```

- *Type:* str

---

##### `create_teradata_data_source`<sup>Required</sup> <a name="create_teradata_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTeradataDataSource"></a>

```python
create_teradata_data_source: str
```

- *Type:* str

---

##### `create_timestream_data_source`<sup>Required</sup> <a name="create_timestream_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTimestreamDataSource"></a>

```python
create_timestream_data_source: str
```

- *Type:* str

---

##### `create_trino_data_source`<sup>Required</sup> <a name="create_trino_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTrinoDataSource"></a>

```python
create_trino_data_source: str
```

- *Type:* str

---

##### `create_twitter_data_source`<sup>Required</sup> <a name="create_twitter_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.createTwitterDataSource"></a>

```python
create_twitter_data_source: str
```

- *Type:* str

---

##### `dashboard`<sup>Required</sup> <a name="dashboard" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dashboard"></a>

```python
dashboard: str
```

- *Type:* str

---

##### `databricks_data_source`<sup>Required</sup> <a name="databricks_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.databricksDataSource"></a>

```python
databricks_data_source: str
```

- *Type:* str

---

##### `db2_data_source`<sup>Required</sup> <a name="db2_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.db2DataSource"></a>

```python
db2_data_source: str
```

- *Type:* str

---

##### `denodo_data_source`<sup>Required</sup> <a name="denodo_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.denodoDataSource"></a>

```python
denodo_data_source: str
```

- *Type:* str

---

##### `document_db_data_source`<sup>Required</sup> <a name="document_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.documentDbDataSource"></a>

```python
document_db_data_source: str
```

- *Type:* str

---

##### `dremio_data_source`<sup>Required</sup> <a name="dremio_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dremioDataSource"></a>

```python
dremio_data_source: str
```

- *Type:* str

---

##### `dynamo_db_data_source`<sup>Required</sup> <a name="dynamo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.dynamoDbDataSource"></a>

```python
dynamo_db_data_source: str
```

- *Type:* str

---

##### `edit_visual_with_q`<sup>Required</sup> <a name="edit_visual_with_q" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.editVisualWithQ"></a>

```python
edit_visual_with_q: str
```

- *Type:* str

---

##### `exasol_data_source`<sup>Required</sup> <a name="exasol_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exasolDataSource"></a>

```python
exasol_data_source: str
```

- *Type:* str

---

##### `export_to_csv`<sup>Required</sup> <a name="export_to_csv" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsv"></a>

```python
export_to_csv: str
```

- *Type:* str

---

##### `export_to_csv_in_scheduled_reports`<sup>Required</sup> <a name="export_to_csv_in_scheduled_reports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToCsvInScheduledReports"></a>

```python
export_to_csv_in_scheduled_reports: str
```

- *Type:* str

---

##### `export_to_excel`<sup>Required</sup> <a name="export_to_excel" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcel"></a>

```python
export_to_excel: str
```

- *Type:* str

---

##### `export_to_excel_in_scheduled_reports`<sup>Required</sup> <a name="export_to_excel_in_scheduled_reports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToExcelInScheduledReports"></a>

```python
export_to_excel_in_scheduled_reports: str
```

- *Type:* str

---

##### `export_to_pdf`<sup>Required</sup> <a name="export_to_pdf" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdf"></a>

```python
export_to_pdf: str
```

- *Type:* str

---

##### `export_to_pdf_in_scheduled_reports`<sup>Required</sup> <a name="export_to_pdf_in_scheduled_reports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.exportToPdfInScheduledReports"></a>

```python
export_to_pdf_in_scheduled_reports: str
```

- *Type:* str

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.extension"></a>

```python
extension: str
```

- *Type:* str

---

##### `fact_set_action`<sup>Required</sup> <a name="fact_set_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.factSetAction"></a>

```python
fact_set_action: str
```

- *Type:* str

---

##### `file_data_source`<sup>Required</sup> <a name="file_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.fileDataSource"></a>

```python
file_data_source: str
```

- *Type:* str

---

##### `flow`<sup>Required</sup> <a name="flow" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.flow"></a>

```python
flow: str
```

- *Type:* str

---

##### `generic_http_action`<sup>Required</sup> <a name="generic_http_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.genericHttpAction"></a>

```python
generic_http_action: str
```

- *Type:* str

---

##### `github_action`<sup>Required</sup> <a name="github_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.githubAction"></a>

```python
github_action: str
```

- *Type:* str

---

##### `git_hub_data_source`<sup>Required</sup> <a name="git_hub_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.gitHubDataSource"></a>

```python
git_hub_data_source: str
```

- *Type:* str

---

##### `google_analytics_data_source`<sup>Required</sup> <a name="google_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleAnalyticsDataSource"></a>

```python
google_analytics_data_source: str
```

- *Type:* str

---

##### `google_big_query_data_source`<sup>Required</sup> <a name="google_big_query_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleBigQueryDataSource"></a>

```python
google_big_query_data_source: str
```

- *Type:* str

---

##### `google_calendar_action`<sup>Required</sup> <a name="google_calendar_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleCalendarAction"></a>

```python
google_calendar_action: str
```

- *Type:* str

---

##### `google_drive_knowledge_base`<sup>Required</sup> <a name="google_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleDriveKnowledgeBase"></a>

```python
google_drive_knowledge_base: str
```

- *Type:* str

---

##### `google_sheets_data_source`<sup>Required</sup> <a name="google_sheets_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.googleSheetsDataSource"></a>

```python
google_sheets_data_source: str
```

- *Type:* str

---

##### `hubspot_action`<sup>Required</sup> <a name="hubspot_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.hubspotAction"></a>

```python
hubspot_action: str
```

- *Type:* str

---

##### `hugging_face_action`<sup>Required</sup> <a name="hugging_face_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.huggingFaceAction"></a>

```python
hugging_face_action: str
```

- *Type:* str

---

##### `idc_knowledge_base`<sup>Required</sup> <a name="idc_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.idcKnowledgeBase"></a>

```python
idc_knowledge_base: str
```

- *Type:* str

---

##### `impala_data_source`<sup>Required</sup> <a name="impala_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.impalaDataSource"></a>

```python
impala_data_source: str
```

- *Type:* str

---

##### `inbound_email_trigger`<sup>Required</sup> <a name="inbound_email_trigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.inboundEmailTrigger"></a>

```python
inbound_email_trigger: str
```

- *Type:* str

---

##### `include_content_in_scheduled_reports_email`<sup>Required</sup> <a name="include_content_in_scheduled_reports_email" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.includeContentInScheduledReportsEmail"></a>

```python
include_content_in_scheduled_reports_email: str
```

- *Type:* str

---

##### `intercom_action`<sup>Required</sup> <a name="intercom_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.intercomAction"></a>

```python
intercom_action: str
```

- *Type:* str

---

##### `invoke_apps_ai_inference`<sup>Required</sup> <a name="invoke_apps_ai_inference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.invokeAppsAiInference"></a>

```python
invoke_apps_ai_inference: str
```

- *Type:* str

---

##### `jira_action`<sup>Required</sup> <a name="jira_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraAction"></a>

```python
jira_action: str
```

- *Type:* str

---

##### `jira_data_source`<sup>Required</sup> <a name="jira_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.jiraDataSource"></a>

```python
jira_data_source: str
```

- *Type:* str

---

##### `knowledge_base`<sup>Required</sup> <a name="knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.knowledgeBase"></a>

```python
knowledge_base: str
```

- *Type:* str

---

##### `linear_action`<sup>Required</sup> <a name="linear_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.linearAction"></a>

```python
linear_action: str
```

- *Type:* str

---

##### `manage_shared_folders`<sup>Required</sup> <a name="manage_shared_folders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.manageSharedFolders"></a>

```python
manage_shared_folders: str
```

- *Type:* str

---

##### `maria_db_data_source`<sup>Required</sup> <a name="maria_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mariaDbDataSource"></a>

```python
maria_db_data_source: str
```

- *Type:* str

---

##### `mcp_action`<sup>Required</sup> <a name="mcp_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mcpAction"></a>

```python
mcp_action: str
```

- *Type:* str

---

##### `monday_action`<sup>Required</sup> <a name="monday_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mondayAction"></a>

```python
monday_action: str
```

- *Type:* str

---

##### `mongo_atlas_data_source`<sup>Required</sup> <a name="mongo_atlas_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoAtlasDataSource"></a>

```python
mongo_atlas_data_source: str
```

- *Type:* str

---

##### `mongo_db_data_source`<sup>Required</sup> <a name="mongo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mongoDbDataSource"></a>

```python
mongo_db_data_source: str
```

- *Type:* str

---

##### `ms_exchange_action`<sup>Required</sup> <a name="ms_exchange_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msExchangeAction"></a>

```python
ms_exchange_action: str
```

- *Type:* str

---

##### `ms_teams_action`<sup>Required</sup> <a name="ms_teams_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.msTeamsAction"></a>

```python
ms_teams_action: str
```

- *Type:* str

---

##### `my_sql_data_source`<sup>Required</sup> <a name="my_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.mySqlDataSource"></a>

```python
my_sql_data_source: str
```

- *Type:* str

---

##### `new_relic_action`<sup>Required</sup> <a name="new_relic_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.newRelicAction"></a>

```python
new_relic_action: str
```

- *Type:* str

---

##### `notion_action`<sup>Required</sup> <a name="notion_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.notionAction"></a>

```python
notion_action: str
```

- *Type:* str

---

##### `one_drive_action`<sup>Required</sup> <a name="one_drive_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveAction"></a>

```python
one_drive_action: str
```

- *Type:* str

---

##### `one_drive_knowledge_base`<sup>Required</sup> <a name="one_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oneDriveKnowledgeBase"></a>

```python
one_drive_knowledge_base: str
```

- *Type:* str

---

##### `open_api_action`<sup>Required</sup> <a name="open_api_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openApiAction"></a>

```python
open_api_action: str
```

- *Type:* str

---

##### `open_search_data_source`<sup>Required</sup> <a name="open_search_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.openSearchDataSource"></a>

```python
open_search_data_source: str
```

- *Type:* str

---

##### `oracle_data_source`<sup>Required</sup> <a name="oracle_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.oracleDataSource"></a>

```python
oracle_data_source: str
```

- *Type:* str

---

##### `pager_duty_action`<sup>Required</sup> <a name="pager_duty_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.pagerDutyAction"></a>

```python
pager_duty_action: str
```

- *Type:* str

---

##### `pay_pal_data_source`<sup>Required</sup> <a name="pay_pal_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.payPalDataSource"></a>

```python
pay_pal_data_source: str
```

- *Type:* str

---

##### `perform_flow_ui_task`<sup>Required</sup> <a name="perform_flow_ui_task" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.performFlowUiTask"></a>

```python
perform_flow_ui_task: str
```

- *Type:* str

---

##### `postgre_sql_data_source`<sup>Required</sup> <a name="postgre_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.postgreSqlDataSource"></a>

```python
postgre_sql_data_source: str
```

- *Type:* str

---

##### `presto_data_source`<sup>Required</sup> <a name="presto_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.prestoDataSource"></a>

```python
presto_data_source: str
```

- *Type:* str

---

##### `print_reports`<sup>Required</sup> <a name="print_reports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.printReports"></a>

```python
print_reports: str
```

- *Type:* str

---

##### `publish_without_approval`<sup>Required</sup> <a name="publish_without_approval" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.publishWithoutApproval"></a>

```python
publish_without_approval: str
```

- *Type:* str

---

##### `q_business_knowledge_base`<sup>Required</sup> <a name="q_business_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.qBusinessKnowledgeBase"></a>

```python
q_business_knowledge_base: str
```

- *Type:* str

---

##### `quick_event_trigger`<sup>Required</sup> <a name="quick_event_trigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.quickEventTrigger"></a>

```python
quick_event_trigger: str
```

- *Type:* str

---

##### `radiant_data_source`<sup>Required</sup> <a name="radiant_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.radiantDataSource"></a>

```python
radiant_data_source: str
```

- *Type:* str

---

##### `rds_data_source`<sup>Required</sup> <a name="rds_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.rdsDataSource"></a>

```python
rds_data_source: str
```

- *Type:* str

---

##### `redshift_auto_discovered_data_source`<sup>Required</sup> <a name="redshift_auto_discovered_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftAutoDiscoveredDataSource"></a>

```python
redshift_auto_discovered_data_source: str
```

- *Type:* str

---

##### `redshift_manual_data_source`<sup>Required</sup> <a name="redshift_manual_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.redshiftManualDataSource"></a>

```python
redshift_manual_data_source: str
```

- *Type:* str

---

##### `rename_shared_folders`<sup>Required</sup> <a name="rename_shared_folders" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.renameSharedFolders"></a>

```python
rename_shared_folders: str
```

- *Type:* str

---

##### `research`<sup>Required</sup> <a name="research" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.research"></a>

```python
research: str
```

- *Type:* str

---

##### `s3_analytics_data_source`<sup>Required</sup> <a name="s3_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3AnalyticsDataSource"></a>

```python
s3_analytics_data_source: str
```

- *Type:* str

---

##### `s3_data_source`<sup>Required</sup> <a name="s3_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3DataSource"></a>

```python
s3_data_source: str
```

- *Type:* str

---

##### `s3_knowledge_base`<sup>Required</sup> <a name="s3_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3KnowledgeBase"></a>

```python
s3_knowledge_base: str
```

- *Type:* str

---

##### `s3_tables_data_source`<sup>Required</sup> <a name="s3_tables_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.s3TablesDataSource"></a>

```python
s3_tables_data_source: str
```

- *Type:* str

---

##### `salesforce_action`<sup>Required</sup> <a name="salesforce_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceAction"></a>

```python
salesforce_action: str
```

- *Type:* str

---

##### `salesforce_data_source`<sup>Required</sup> <a name="salesforce_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.salesforceDataSource"></a>

```python
salesforce_data_source: str
```

- *Type:* str

---

##### `sand_p_global_energy_action`<sup>Required</sup> <a name="sand_p_global_energy_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPGlobalEnergyAction"></a>

```python
sand_p_global_energy_action: str
```

- *Type:* str

---

##### `sand_pgmi_action`<sup>Required</sup> <a name="sand_pgmi_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sandPgmiAction"></a>

```python
sand_pgmi_action: str
```

- *Type:* str

---

##### `sap_bill_of_material_action`<sup>Required</sup> <a name="sap_bill_of_material_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBillOfMaterialAction"></a>

```python
sap_bill_of_material_action: str
```

- *Type:* str

---

##### `sap_business_partner_action`<sup>Required</sup> <a name="sap_business_partner_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapBusinessPartnerAction"></a>

```python
sap_business_partner_action: str
```

- *Type:* str

---

##### `sap_hana_data_source`<sup>Required</sup> <a name="sap_hana_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapHanaDataSource"></a>

```python
sap_hana_data_source: str
```

- *Type:* str

---

##### `sap_material_stock_action`<sup>Required</sup> <a name="sap_material_stock_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapMaterialStockAction"></a>

```python
sap_material_stock_action: str
```

- *Type:* str

---

##### `sap_physical_inventory_action`<sup>Required</sup> <a name="sap_physical_inventory_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapPhysicalInventoryAction"></a>

```python
sap_physical_inventory_action: str
```

- *Type:* str

---

##### `sap_product_master_data_action`<sup>Required</sup> <a name="sap_product_master_data_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sapProductMasterDataAction"></a>

```python
sap_product_master_data_action: str
```

- *Type:* str

---

##### `schedule_trigger`<sup>Required</sup> <a name="schedule_trigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.scheduleTrigger"></a>

```python
schedule_trigger: str
```

- *Type:* str

---

##### `service_now_action`<sup>Required</sup> <a name="service_now_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowAction"></a>

```python
service_now_action: str
```

- *Type:* str

---

##### `service_now_data_source`<sup>Required</sup> <a name="service_now_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.serviceNowDataSource"></a>

```python
service_now_data_source: str
```

- *Type:* str

---

##### `share_adobe_analytics_data_source`<sup>Required</sup> <a name="share_adobe_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAdobeAnalyticsDataSource"></a>

```python
share_adobe_analytics_data_source: str
```

- *Type:* str

---

##### `share_amazon_bedrock_ars_action`<sup>Required</sup> <a name="share_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockArsAction"></a>

```python
share_amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `share_amazon_bedrock_fs_action`<sup>Required</sup> <a name="share_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockFsAction"></a>

```python
share_amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `share_amazon_bedrock_krs_action`<sup>Required</sup> <a name="share_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonBedrockKrsAction"></a>

```python
share_amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `share_amazon_s_three_action`<sup>Required</sup> <a name="share_amazon_s_three_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAmazonSThreeAction"></a>

```python
share_amazon_s_three_action: str
```

- *Type:* str

---

##### `share_analyses`<sup>Required</sup> <a name="share_analyses" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAnalyses"></a>

```python
share_analyses: str
```

- *Type:* str

---

##### `share_apps`<sup>Required</sup> <a name="share_apps" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareApps"></a>

```python
share_apps: str
```

- *Type:* str

---

##### `share_asana_action`<sup>Required</sup> <a name="share_asana_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAsanaAction"></a>

```python
share_asana_action: str
```

- *Type:* str

---

##### `share_athena_data_source`<sup>Required</sup> <a name="share_athena_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAthenaDataSource"></a>

```python
share_athena_data_source: str
```

- *Type:* str

---

##### `share_aurora_data_source`<sup>Required</sup> <a name="share_aurora_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareAuroraDataSource"></a>

```python
share_aurora_data_source: str
```

- *Type:* str

---

##### `share_bamboo_hr_action`<sup>Required</sup> <a name="share_bamboo_hr_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBambooHrAction"></a>

```python
share_bamboo_hr_action: str
```

- *Type:* str

---

##### `share_bedrock_managed_knowledge_base`<sup>Required</sup> <a name="share_bedrock_managed_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBedrockManagedKnowledgeBase"></a>

```python
share_bedrock_managed_knowledge_base: str
```

- *Type:* str

---

##### `share_box_agent_action`<sup>Required</sup> <a name="share_box_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxAgentAction"></a>

```python
share_box_agent_action: str
```

- *Type:* str

---

##### `share_box_knowledge_base`<sup>Required</sup> <a name="share_box_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareBoxKnowledgeBase"></a>

```python
share_box_knowledge_base: str
```

- *Type:* str

---

##### `share_canva_agent_action`<sup>Required</sup> <a name="share_canva_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareCanvaAgentAction"></a>

```python
share_canva_agent_action: str
```

- *Type:* str

---

##### `share_chat_agents`<sup>Required</sup> <a name="share_chat_agents" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareChatAgents"></a>

```python
share_chat_agents: str
```

- *Type:* str

---

##### `share_comprehend_action`<sup>Required</sup> <a name="share_comprehend_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendAction"></a>

```python
share_comprehend_action: str
```

- *Type:* str

---

##### `share_comprehend_medical_action`<sup>Required</sup> <a name="share_comprehend_medical_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareComprehendMedicalAction"></a>

```python
share_comprehend_medical_action: str
```

- *Type:* str

---

##### `share_confluence_action`<sup>Required</sup> <a name="share_confluence_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceAction"></a>

```python
share_confluence_action: str
```

- *Type:* str

---

##### `share_confluence_knowledge_base`<sup>Required</sup> <a name="share_confluence_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareConfluenceKnowledgeBase"></a>

```python
share_confluence_knowledge_base: str
```

- *Type:* str

---

##### `share_dashboards`<sup>Required</sup> <a name="share_dashboards" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDashboards"></a>

```python
share_dashboards: str
```

- *Type:* str

---

##### `share_databricks_data_source`<sup>Required</sup> <a name="share_databricks_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatabricksDataSource"></a>

```python
share_databricks_data_source: str
```

- *Type:* str

---

##### `share_datasets`<sup>Required</sup> <a name="share_datasets" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDatasets"></a>

```python
share_datasets: str
```

- *Type:* str

---

##### `share_data_sources`<sup>Required</sup> <a name="share_data_sources" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDataSources"></a>

```python
share_data_sources: str
```

- *Type:* str

---

##### `share_db2_data_source`<sup>Required</sup> <a name="share_db2_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDb2DataSource"></a>

```python
share_db2_data_source: str
```

- *Type:* str

---

##### `share_denodo_data_source`<sup>Required</sup> <a name="share_denodo_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDenodoDataSource"></a>

```python
share_denodo_data_source: str
```

- *Type:* str

---

##### `share_document_db_data_source`<sup>Required</sup> <a name="share_document_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDocumentDbDataSource"></a>

```python
share_document_db_data_source: str
```

- *Type:* str

---

##### `share_dremio_data_source`<sup>Required</sup> <a name="share_dremio_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDremioDataSource"></a>

```python
share_dremio_data_source: str
```

- *Type:* str

---

##### `share_dynamo_db_data_source`<sup>Required</sup> <a name="share_dynamo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareDynamoDbDataSource"></a>

```python
share_dynamo_db_data_source: str
```

- *Type:* str

---

##### `share_exasol_data_source`<sup>Required</sup> <a name="share_exasol_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareExasolDataSource"></a>

```python
share_exasol_data_source: str
```

- *Type:* str

---

##### `share_fact_set_action`<sup>Required</sup> <a name="share_fact_set_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFactSetAction"></a>

```python
share_fact_set_action: str
```

- *Type:* str

---

##### `share_file_data_source`<sup>Required</sup> <a name="share_file_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareFileDataSource"></a>

```python
share_file_data_source: str
```

- *Type:* str

---

##### `share_generic_http_action`<sup>Required</sup> <a name="share_generic_http_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGenericHttpAction"></a>

```python
share_generic_http_action: str
```

- *Type:* str

---

##### `share_github_action`<sup>Required</sup> <a name="share_github_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGithubAction"></a>

```python
share_github_action: str
```

- *Type:* str

---

##### `share_git_hub_data_source`<sup>Required</sup> <a name="share_git_hub_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGitHubDataSource"></a>

```python
share_git_hub_data_source: str
```

- *Type:* str

---

##### `share_google_analytics_data_source`<sup>Required</sup> <a name="share_google_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleAnalyticsDataSource"></a>

```python
share_google_analytics_data_source: str
```

- *Type:* str

---

##### `share_google_big_query_data_source`<sup>Required</sup> <a name="share_google_big_query_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleBigQueryDataSource"></a>

```python
share_google_big_query_data_source: str
```

- *Type:* str

---

##### `share_google_calendar_action`<sup>Required</sup> <a name="share_google_calendar_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleCalendarAction"></a>

```python
share_google_calendar_action: str
```

- *Type:* str

---

##### `share_google_drive_knowledge_base`<sup>Required</sup> <a name="share_google_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleDriveKnowledgeBase"></a>

```python
share_google_drive_knowledge_base: str
```

- *Type:* str

---

##### `share_google_sheets_data_source`<sup>Required</sup> <a name="share_google_sheets_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareGoogleSheetsDataSource"></a>

```python
share_google_sheets_data_source: str
```

- *Type:* str

---

##### `share_hubspot_action`<sup>Required</sup> <a name="share_hubspot_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHubspotAction"></a>

```python
share_hubspot_action: str
```

- *Type:* str

---

##### `share_hugging_face_action`<sup>Required</sup> <a name="share_hugging_face_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareHuggingFaceAction"></a>

```python
share_hugging_face_action: str
```

- *Type:* str

---

##### `share_idc_knowledge_base`<sup>Required</sup> <a name="share_idc_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIdcKnowledgeBase"></a>

```python
share_idc_knowledge_base: str
```

- *Type:* str

---

##### `share_impala_data_source`<sup>Required</sup> <a name="share_impala_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareImpalaDataSource"></a>

```python
share_impala_data_source: str
```

- *Type:* str

---

##### `share_intercom_action`<sup>Required</sup> <a name="share_intercom_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareIntercomAction"></a>

```python
share_intercom_action: str
```

- *Type:* str

---

##### `share_jira_action`<sup>Required</sup> <a name="share_jira_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraAction"></a>

```python
share_jira_action: str
```

- *Type:* str

---

##### `share_jira_data_source`<sup>Required</sup> <a name="share_jira_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareJiraDataSource"></a>

```python
share_jira_data_source: str
```

- *Type:* str

---

##### `share_knowledge_bases`<sup>Required</sup> <a name="share_knowledge_bases" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareKnowledgeBases"></a>

```python
share_knowledge_bases: str
```

- *Type:* str

---

##### `share_linear_action`<sup>Required</sup> <a name="share_linear_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareLinearAction"></a>

```python
share_linear_action: str
```

- *Type:* str

---

##### `share_maria_db_data_source`<sup>Required</sup> <a name="share_maria_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMariaDbDataSource"></a>

```python
share_maria_db_data_source: str
```

- *Type:* str

---

##### `share_mcp_action`<sup>Required</sup> <a name="share_mcp_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMcpAction"></a>

```python
share_mcp_action: str
```

- *Type:* str

---

##### `share_monday_action`<sup>Required</sup> <a name="share_monday_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMondayAction"></a>

```python
share_monday_action: str
```

- *Type:* str

---

##### `share_mongo_atlas_data_source`<sup>Required</sup> <a name="share_mongo_atlas_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoAtlasDataSource"></a>

```python
share_mongo_atlas_data_source: str
```

- *Type:* str

---

##### `share_mongo_db_data_source`<sup>Required</sup> <a name="share_mongo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMongoDbDataSource"></a>

```python
share_mongo_db_data_source: str
```

- *Type:* str

---

##### `share_ms_exchange_action`<sup>Required</sup> <a name="share_ms_exchange_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsExchangeAction"></a>

```python
share_ms_exchange_action: str
```

- *Type:* str

---

##### `share_ms_teams_action`<sup>Required</sup> <a name="share_ms_teams_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMsTeamsAction"></a>

```python
share_ms_teams_action: str
```

- *Type:* str

---

##### `share_my_sql_data_source`<sup>Required</sup> <a name="share_my_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareMySqlDataSource"></a>

```python
share_my_sql_data_source: str
```

- *Type:* str

---

##### `share_new_relic_action`<sup>Required</sup> <a name="share_new_relic_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNewRelicAction"></a>

```python
share_new_relic_action: str
```

- *Type:* str

---

##### `share_notion_action`<sup>Required</sup> <a name="share_notion_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareNotionAction"></a>

```python
share_notion_action: str
```

- *Type:* str

---

##### `share_one_drive_action`<sup>Required</sup> <a name="share_one_drive_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveAction"></a>

```python
share_one_drive_action: str
```

- *Type:* str

---

##### `share_one_drive_knowledge_base`<sup>Required</sup> <a name="share_one_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOneDriveKnowledgeBase"></a>

```python
share_one_drive_knowledge_base: str
```

- *Type:* str

---

##### `share_open_api_action`<sup>Required</sup> <a name="share_open_api_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenApiAction"></a>

```python
share_open_api_action: str
```

- *Type:* str

---

##### `share_open_search_data_source`<sup>Required</sup> <a name="share_open_search_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOpenSearchDataSource"></a>

```python
share_open_search_data_source: str
```

- *Type:* str

---

##### `share_oracle_data_source`<sup>Required</sup> <a name="share_oracle_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareOracleDataSource"></a>

```python
share_oracle_data_source: str
```

- *Type:* str

---

##### `share_pager_duty_action`<sup>Required</sup> <a name="share_pager_duty_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePagerDutyAction"></a>

```python
share_pager_duty_action: str
```

- *Type:* str

---

##### `share_pay_pal_data_source`<sup>Required</sup> <a name="share_pay_pal_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePayPalDataSource"></a>

```python
share_pay_pal_data_source: str
```

- *Type:* str

---

##### `share_point_action`<sup>Required</sup> <a name="share_point_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointAction"></a>

```python
share_point_action: str
```

- *Type:* str

---

##### `share_point_knowledge_base`<sup>Required</sup> <a name="share_point_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePointKnowledgeBase"></a>

```python
share_point_knowledge_base: str
```

- *Type:* str

---

##### `share_postgre_sql_data_source`<sup>Required</sup> <a name="share_postgre_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePostgreSqlDataSource"></a>

```python
share_postgre_sql_data_source: str
```

- *Type:* str

---

##### `share_presto_data_source`<sup>Required</sup> <a name="share_presto_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sharePrestoDataSource"></a>

```python
share_presto_data_source: str
```

- *Type:* str

---

##### `share_q_business_knowledge_base`<sup>Required</sup> <a name="share_q_business_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareQBusinessKnowledgeBase"></a>

```python
share_q_business_knowledge_base: str
```

- *Type:* str

---

##### `share_radiant_data_source`<sup>Required</sup> <a name="share_radiant_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRadiantDataSource"></a>

```python
share_radiant_data_source: str
```

- *Type:* str

---

##### `share_rds_data_source`<sup>Required</sup> <a name="share_rds_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRdsDataSource"></a>

```python
share_rds_data_source: str
```

- *Type:* str

---

##### `share_redshift_auto_discovered_data_source`<sup>Required</sup> <a name="share_redshift_auto_discovered_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftAutoDiscoveredDataSource"></a>

```python
share_redshift_auto_discovered_data_source: str
```

- *Type:* str

---

##### `share_redshift_manual_data_source`<sup>Required</sup> <a name="share_redshift_manual_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareRedshiftManualDataSource"></a>

```python
share_redshift_manual_data_source: str
```

- *Type:* str

---

##### `share_s3_analytics_data_source`<sup>Required</sup> <a name="share_s3_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3AnalyticsDataSource"></a>

```python
share_s3_analytics_data_source: str
```

- *Type:* str

---

##### `share_s3_data_source`<sup>Required</sup> <a name="share_s3_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3DataSource"></a>

```python
share_s3_data_source: str
```

- *Type:* str

---

##### `share_s3_knowledge_base`<sup>Required</sup> <a name="share_s3_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3KnowledgeBase"></a>

```python
share_s3_knowledge_base: str
```

- *Type:* str

---

##### `share_s3_tables_data_source`<sup>Required</sup> <a name="share_s3_tables_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareS3TablesDataSource"></a>

```python
share_s3_tables_data_source: str
```

- *Type:* str

---

##### `share_salesforce_action`<sup>Required</sup> <a name="share_salesforce_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceAction"></a>

```python
share_salesforce_action: str
```

- *Type:* str

---

##### `share_salesforce_data_source`<sup>Required</sup> <a name="share_salesforce_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSalesforceDataSource"></a>

```python
share_salesforce_data_source: str
```

- *Type:* str

---

##### `share_sand_p_global_energy_action`<sup>Required</sup> <a name="share_sand_p_global_energy_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPGlobalEnergyAction"></a>

```python
share_sand_p_global_energy_action: str
```

- *Type:* str

---

##### `share_sand_pgmi_action`<sup>Required</sup> <a name="share_sand_pgmi_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSandPgmiAction"></a>

```python
share_sand_pgmi_action: str
```

- *Type:* str

---

##### `share_sap_bill_of_material_action`<sup>Required</sup> <a name="share_sap_bill_of_material_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBillOfMaterialAction"></a>

```python
share_sap_bill_of_material_action: str
```

- *Type:* str

---

##### `share_sap_business_partner_action`<sup>Required</sup> <a name="share_sap_business_partner_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapBusinessPartnerAction"></a>

```python
share_sap_business_partner_action: str
```

- *Type:* str

---

##### `share_sap_hana_data_source`<sup>Required</sup> <a name="share_sap_hana_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapHanaDataSource"></a>

```python
share_sap_hana_data_source: str
```

- *Type:* str

---

##### `share_sap_material_stock_action`<sup>Required</sup> <a name="share_sap_material_stock_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapMaterialStockAction"></a>

```python
share_sap_material_stock_action: str
```

- *Type:* str

---

##### `share_sap_physical_inventory_action`<sup>Required</sup> <a name="share_sap_physical_inventory_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapPhysicalInventoryAction"></a>

```python
share_sap_physical_inventory_action: str
```

- *Type:* str

---

##### `share_sap_product_master_data_action`<sup>Required</sup> <a name="share_sap_product_master_data_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSapProductMasterDataAction"></a>

```python
share_sap_product_master_data_action: str
```

- *Type:* str

---

##### `share_service_now_action`<sup>Required</sup> <a name="share_service_now_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowAction"></a>

```python
share_service_now_action: str
```

- *Type:* str

---

##### `share_service_now_data_source`<sup>Required</sup> <a name="share_service_now_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareServiceNowDataSource"></a>

```python
share_service_now_data_source: str
```

- *Type:* str

---

##### `share_share_point_action`<sup>Required</sup> <a name="share_share_point_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointAction"></a>

```python
share_share_point_action: str
```

- *Type:* str

---

##### `share_share_point_knowledge_base`<sup>Required</sup> <a name="share_share_point_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSharePointKnowledgeBase"></a>

```python
share_share_point_knowledge_base: str
```

- *Type:* str

---

##### `share_slack_action`<sup>Required</sup> <a name="share_slack_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSlackAction"></a>

```python
share_slack_action: str
```

- *Type:* str

---

##### `share_smartsheet_action`<sup>Required</sup> <a name="share_smartsheet_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSmartsheetAction"></a>

```python
share_smartsheet_action: str
```

- *Type:* str

---

##### `share_snowflake_data_source`<sup>Required</sup> <a name="share_snowflake_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSnowflakeDataSource"></a>

```python
share_snowflake_data_source: str
```

- *Type:* str

---

##### `share_spaces`<sup>Required</sup> <a name="share_spaces" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSpaces"></a>

```python
share_spaces: str
```

- *Type:* str

---

##### `share_spark_data_source`<sup>Required</sup> <a name="share_spark_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSparkDataSource"></a>

```python
share_spark_data_source: str
```

- *Type:* str

---

##### `share_sql_server_data_source`<sup>Required</sup> <a name="share_sql_server_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSqlServerDataSource"></a>

```python
share_sql_server_data_source: str
```

- *Type:* str

---

##### `share_square_data_source`<sup>Required</sup> <a name="share_square_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareSquareDataSource"></a>

```python
share_square_data_source: str
```

- *Type:* str

---

##### `share_starburst_data_source`<sup>Required</sup> <a name="share_starburst_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareStarburstDataSource"></a>

```python
share_starburst_data_source: str
```

- *Type:* str

---

##### `share_teradata_data_source`<sup>Required</sup> <a name="share_teradata_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTeradataDataSource"></a>

```python
share_teradata_data_source: str
```

- *Type:* str

---

##### `share_textract_action`<sup>Required</sup> <a name="share_textract_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTextractAction"></a>

```python
share_textract_action: str
```

- *Type:* str

---

##### `share_timestream_data_source`<sup>Required</sup> <a name="share_timestream_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTimestreamDataSource"></a>

```python
share_timestream_data_source: str
```

- *Type:* str

---

##### `share_trino_data_source`<sup>Required</sup> <a name="share_trino_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTrinoDataSource"></a>

```python
share_trino_data_source: str
```

- *Type:* str

---

##### `share_twitter_data_source`<sup>Required</sup> <a name="share_twitter_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareTwitterDataSource"></a>

```python
share_twitter_data_source: str
```

- *Type:* str

---

##### `share_web_crawler_knowledge_base`<sup>Required</sup> <a name="share_web_crawler_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareWebCrawlerKnowledgeBase"></a>

```python
share_web_crawler_knowledge_base: str
```

- *Type:* str

---

##### `share_zendesk_action`<sup>Required</sup> <a name="share_zendesk_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.shareZendeskAction"></a>

```python
share_zendesk_action: str
```

- *Type:* str

---

##### `slack_action`<sup>Required</sup> <a name="slack_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.slackAction"></a>

```python
slack_action: str
```

- *Type:* str

---

##### `smartsheet_action`<sup>Required</sup> <a name="smartsheet_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.smartsheetAction"></a>

```python
smartsheet_action: str
```

- *Type:* str

---

##### `snowflake_data_source`<sup>Required</sup> <a name="snowflake_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.snowflakeDataSource"></a>

```python
snowflake_data_source: str
```

- *Type:* str

---

##### `space`<sup>Required</sup> <a name="space" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.space"></a>

```python
space: str
```

- *Type:* str

---

##### `spark_data_source`<sup>Required</sup> <a name="spark_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sparkDataSource"></a>

```python
spark_data_source: str
```

- *Type:* str

---

##### `sql_server_data_source`<sup>Required</sup> <a name="sql_server_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.sqlServerDataSource"></a>

```python
sql_server_data_source: str
```

- *Type:* str

---

##### `square_data_source`<sup>Required</sup> <a name="square_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.squareDataSource"></a>

```python
square_data_source: str
```

- *Type:* str

---

##### `starburst_data_source`<sup>Required</sup> <a name="starburst_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.starburstDataSource"></a>

```python
starburst_data_source: str
```

- *Type:* str

---

##### `subscribe_dashboard_email_reports`<sup>Required</sup> <a name="subscribe_dashboard_email_reports" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.subscribeDashboardEmailReports"></a>

```python
subscribe_dashboard_email_reports: str
```

- *Type:* str

---

##### `teradata_data_source`<sup>Required</sup> <a name="teradata_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.teradataDataSource"></a>

```python
teradata_data_source: str
```

- *Type:* str

---

##### `textract_action`<sup>Required</sup> <a name="textract_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.textractAction"></a>

```python
textract_action: str
```

- *Type:* str

---

##### `timestream_data_source`<sup>Required</sup> <a name="timestream_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.timestreamDataSource"></a>

```python
timestream_data_source: str
```

- *Type:* str

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `trino_data_source`<sup>Required</sup> <a name="trino_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.trinoDataSource"></a>

```python
trino_data_source: str
```

- *Type:* str

---

##### `twitter_data_source`<sup>Required</sup> <a name="twitter_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.twitterDataSource"></a>

```python
twitter_data_source: str
```

- *Type:* str

---

##### `update_adobe_analytics_data_source`<sup>Required</sup> <a name="update_adobe_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAdobeAnalyticsDataSource"></a>

```python
update_adobe_analytics_data_source: str
```

- *Type:* str

---

##### `update_athena_data_source`<sup>Required</sup> <a name="update_athena_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAthenaDataSource"></a>

```python
update_athena_data_source: str
```

- *Type:* str

---

##### `update_aurora_data_source`<sup>Required</sup> <a name="update_aurora_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateAuroraDataSource"></a>

```python
update_aurora_data_source: str
```

- *Type:* str

---

##### `update_databricks_data_source`<sup>Required</sup> <a name="update_databricks_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDatabricksDataSource"></a>

```python
update_databricks_data_source: str
```

- *Type:* str

---

##### `update_db2_data_source`<sup>Required</sup> <a name="update_db2_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDb2DataSource"></a>

```python
update_db2_data_source: str
```

- *Type:* str

---

##### `update_denodo_data_source`<sup>Required</sup> <a name="update_denodo_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDenodoDataSource"></a>

```python
update_denodo_data_source: str
```

- *Type:* str

---

##### `update_document_db_data_source`<sup>Required</sup> <a name="update_document_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDocumentDbDataSource"></a>

```python
update_document_db_data_source: str
```

- *Type:* str

---

##### `update_dremio_data_source`<sup>Required</sup> <a name="update_dremio_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDremioDataSource"></a>

```python
update_dremio_data_source: str
```

- *Type:* str

---

##### `update_dynamo_db_data_source`<sup>Required</sup> <a name="update_dynamo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateDynamoDbDataSource"></a>

```python
update_dynamo_db_data_source: str
```

- *Type:* str

---

##### `update_exasol_data_source`<sup>Required</sup> <a name="update_exasol_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateExasolDataSource"></a>

```python
update_exasol_data_source: str
```

- *Type:* str

---

##### `update_file_data_source`<sup>Required</sup> <a name="update_file_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateFileDataSource"></a>

```python
update_file_data_source: str
```

- *Type:* str

---

##### `update_git_hub_data_source`<sup>Required</sup> <a name="update_git_hub_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGitHubDataSource"></a>

```python
update_git_hub_data_source: str
```

- *Type:* str

---

##### `update_google_analytics_data_source`<sup>Required</sup> <a name="update_google_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleAnalyticsDataSource"></a>

```python
update_google_analytics_data_source: str
```

- *Type:* str

---

##### `update_google_big_query_data_source`<sup>Required</sup> <a name="update_google_big_query_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleBigQueryDataSource"></a>

```python
update_google_big_query_data_source: str
```

- *Type:* str

---

##### `update_google_sheets_data_source`<sup>Required</sup> <a name="update_google_sheets_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateGoogleSheetsDataSource"></a>

```python
update_google_sheets_data_source: str
```

- *Type:* str

---

##### `update_impala_data_source`<sup>Required</sup> <a name="update_impala_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateImpalaDataSource"></a>

```python
update_impala_data_source: str
```

- *Type:* str

---

##### `update_jira_data_source`<sup>Required</sup> <a name="update_jira_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateJiraDataSource"></a>

```python
update_jira_data_source: str
```

- *Type:* str

---

##### `update_maria_db_data_source`<sup>Required</sup> <a name="update_maria_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMariaDbDataSource"></a>

```python
update_maria_db_data_source: str
```

- *Type:* str

---

##### `update_mongo_atlas_data_source`<sup>Required</sup> <a name="update_mongo_atlas_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoAtlasDataSource"></a>

```python
update_mongo_atlas_data_source: str
```

- *Type:* str

---

##### `update_mongo_db_data_source`<sup>Required</sup> <a name="update_mongo_db_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMongoDbDataSource"></a>

```python
update_mongo_db_data_source: str
```

- *Type:* str

---

##### `update_my_sql_data_source`<sup>Required</sup> <a name="update_my_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateMySqlDataSource"></a>

```python
update_my_sql_data_source: str
```

- *Type:* str

---

##### `update_open_search_data_source`<sup>Required</sup> <a name="update_open_search_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOpenSearchDataSource"></a>

```python
update_open_search_data_source: str
```

- *Type:* str

---

##### `update_oracle_data_source`<sup>Required</sup> <a name="update_oracle_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateOracleDataSource"></a>

```python
update_oracle_data_source: str
```

- *Type:* str

---

##### `update_pay_pal_data_source`<sup>Required</sup> <a name="update_pay_pal_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePayPalDataSource"></a>

```python
update_pay_pal_data_source: str
```

- *Type:* str

---

##### `update_postgre_sql_data_source`<sup>Required</sup> <a name="update_postgre_sql_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePostgreSqlDataSource"></a>

```python
update_postgre_sql_data_source: str
```

- *Type:* str

---

##### `update_presto_data_source`<sup>Required</sup> <a name="update_presto_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updatePrestoDataSource"></a>

```python
update_presto_data_source: str
```

- *Type:* str

---

##### `update_radiant_data_source`<sup>Required</sup> <a name="update_radiant_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRadiantDataSource"></a>

```python
update_radiant_data_source: str
```

- *Type:* str

---

##### `update_rds_data_source`<sup>Required</sup> <a name="update_rds_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRdsDataSource"></a>

```python
update_rds_data_source: str
```

- *Type:* str

---

##### `update_redshift_auto_discovered_data_source`<sup>Required</sup> <a name="update_redshift_auto_discovered_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftAutoDiscoveredDataSource"></a>

```python
update_redshift_auto_discovered_data_source: str
```

- *Type:* str

---

##### `update_redshift_manual_data_source`<sup>Required</sup> <a name="update_redshift_manual_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateRedshiftManualDataSource"></a>

```python
update_redshift_manual_data_source: str
```

- *Type:* str

---

##### `update_s3_analytics_data_source`<sup>Required</sup> <a name="update_s3_analytics_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3AnalyticsDataSource"></a>

```python
update_s3_analytics_data_source: str
```

- *Type:* str

---

##### `update_s3_data_source`<sup>Required</sup> <a name="update_s3_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3DataSource"></a>

```python
update_s3_data_source: str
```

- *Type:* str

---

##### `update_s3_tables_data_source`<sup>Required</sup> <a name="update_s3_tables_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateS3TablesDataSource"></a>

```python
update_s3_tables_data_source: str
```

- *Type:* str

---

##### `update_salesforce_data_source`<sup>Required</sup> <a name="update_salesforce_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSalesforceDataSource"></a>

```python
update_salesforce_data_source: str
```

- *Type:* str

---

##### `update_sap_hana_data_source`<sup>Required</sup> <a name="update_sap_hana_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSapHanaDataSource"></a>

```python
update_sap_hana_data_source: str
```

- *Type:* str

---

##### `update_service_now_data_source`<sup>Required</sup> <a name="update_service_now_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateServiceNowDataSource"></a>

```python
update_service_now_data_source: str
```

- *Type:* str

---

##### `update_snowflake_data_source`<sup>Required</sup> <a name="update_snowflake_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSnowflakeDataSource"></a>

```python
update_snowflake_data_source: str
```

- *Type:* str

---

##### `update_spark_data_source`<sup>Required</sup> <a name="update_spark_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSparkDataSource"></a>

```python
update_spark_data_source: str
```

- *Type:* str

---

##### `update_sql_server_data_source`<sup>Required</sup> <a name="update_sql_server_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSqlServerDataSource"></a>

```python
update_sql_server_data_source: str
```

- *Type:* str

---

##### `update_square_data_source`<sup>Required</sup> <a name="update_square_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateSquareDataSource"></a>

```python
update_square_data_source: str
```

- *Type:* str

---

##### `update_starburst_data_source`<sup>Required</sup> <a name="update_starburst_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateStarburstDataSource"></a>

```python
update_starburst_data_source: str
```

- *Type:* str

---

##### `update_teradata_data_source`<sup>Required</sup> <a name="update_teradata_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTeradataDataSource"></a>

```python
update_teradata_data_source: str
```

- *Type:* str

---

##### `update_timestream_data_source`<sup>Required</sup> <a name="update_timestream_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTimestreamDataSource"></a>

```python
update_timestream_data_source: str
```

- *Type:* str

---

##### `update_trino_data_source`<sup>Required</sup> <a name="update_trino_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTrinoDataSource"></a>

```python
update_trino_data_source: str
```

- *Type:* str

---

##### `update_twitter_data_source`<sup>Required</sup> <a name="update_twitter_data_source" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.updateTwitterDataSource"></a>

```python
update_twitter_data_source: str
```

- *Type:* str

---

##### `use_agent_web_search`<sup>Required</sup> <a name="use_agent_web_search" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAgentWebSearch"></a>

```python
use_agent_web_search: str
```

- *Type:* str

---

##### `use_amazon_bedrock_ars_action`<sup>Required</sup> <a name="use_amazon_bedrock_ars_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockArsAction"></a>

```python
use_amazon_bedrock_ars_action: str
```

- *Type:* str

---

##### `use_amazon_bedrock_fs_action`<sup>Required</sup> <a name="use_amazon_bedrock_fs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockFsAction"></a>

```python
use_amazon_bedrock_fs_action: str
```

- *Type:* str

---

##### `use_amazon_bedrock_krs_action`<sup>Required</sup> <a name="use_amazon_bedrock_krs_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonBedrockKrsAction"></a>

```python
use_amazon_bedrock_krs_action: str
```

- *Type:* str

---

##### `use_amazon_s_three_action`<sup>Required</sup> <a name="use_amazon_s_three_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAmazonSThreeAction"></a>

```python
use_amazon_s_three_action: str
```

- *Type:* str

---

##### `use_asana_action`<sup>Required</sup> <a name="use_asana_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useAsanaAction"></a>

```python
use_asana_action: str
```

- *Type:* str

---

##### `use_bamboo_hr_action`<sup>Required</sup> <a name="use_bamboo_hr_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBambooHrAction"></a>

```python
use_bamboo_hr_action: str
```

- *Type:* str

---

##### `use_bedrock_managed_knowledge_base`<sup>Required</sup> <a name="use_bedrock_managed_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockManagedKnowledgeBase"></a>

```python
use_bedrock_managed_knowledge_base: str
```

- *Type:* str

---

##### `use_bedrock_models`<sup>Required</sup> <a name="use_bedrock_models" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBedrockModels"></a>

```python
use_bedrock_models: str
```

- *Type:* str

---

##### `use_box_agent_action`<sup>Required</sup> <a name="use_box_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxAgentAction"></a>

```python
use_box_agent_action: str
```

- *Type:* str

---

##### `use_box_knowledge_base`<sup>Required</sup> <a name="use_box_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBoxKnowledgeBase"></a>

```python
use_box_knowledge_base: str
```

- *Type:* str

---

##### `use_browser_extension`<sup>Required</sup> <a name="use_browser_extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useBrowserExtension"></a>

```python
use_browser_extension: str
```

- *Type:* str

---

##### `use_canva_agent_action`<sup>Required</sup> <a name="use_canva_agent_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useCanvaAgentAction"></a>

```python
use_canva_agent_action: str
```

- *Type:* str

---

##### `use_comprehend_action`<sup>Required</sup> <a name="use_comprehend_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendAction"></a>

```python
use_comprehend_action: str
```

- *Type:* str

---

##### `use_comprehend_medical_action`<sup>Required</sup> <a name="use_comprehend_medical_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useComprehendMedicalAction"></a>

```python
use_comprehend_medical_action: str
```

- *Type:* str

---

##### `use_confluence_action`<sup>Required</sup> <a name="use_confluence_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceAction"></a>

```python
use_confluence_action: str
```

- *Type:* str

---

##### `use_confluence_knowledge_base`<sup>Required</sup> <a name="use_confluence_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useConfluenceKnowledgeBase"></a>

```python
use_confluence_knowledge_base: str
```

- *Type:* str

---

##### `use_excel_add_in_extension`<sup>Required</sup> <a name="use_excel_add_in_extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useExcelAddInExtension"></a>

```python
use_excel_add_in_extension: str
```

- *Type:* str

---

##### `use_fact_set_action`<sup>Required</sup> <a name="use_fact_set_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useFactSetAction"></a>

```python
use_fact_set_action: str
```

- *Type:* str

---

##### `use_generic_http_action`<sup>Required</sup> <a name="use_generic_http_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGenericHttpAction"></a>

```python
use_generic_http_action: str
```

- *Type:* str

---

##### `use_github_action`<sup>Required</sup> <a name="use_github_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGithubAction"></a>

```python
use_github_action: str
```

- *Type:* str

---

##### `use_google_calendar_action`<sup>Required</sup> <a name="use_google_calendar_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleCalendarAction"></a>

```python
use_google_calendar_action: str
```

- *Type:* str

---

##### `use_google_drive_knowledge_base`<sup>Required</sup> <a name="use_google_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useGoogleDriveKnowledgeBase"></a>

```python
use_google_drive_knowledge_base: str
```

- *Type:* str

---

##### `use_hubspot_action`<sup>Required</sup> <a name="use_hubspot_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHubspotAction"></a>

```python
use_hubspot_action: str
```

- *Type:* str

---

##### `use_hugging_face_action`<sup>Required</sup> <a name="use_hugging_face_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useHuggingFaceAction"></a>

```python
use_hugging_face_action: str
```

- *Type:* str

---

##### `use_idc_knowledge_base`<sup>Required</sup> <a name="use_idc_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIdcKnowledgeBase"></a>

```python
use_idc_knowledge_base: str
```

- *Type:* str

---

##### `use_intercom_action`<sup>Required</sup> <a name="use_intercom_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useIntercomAction"></a>

```python
use_intercom_action: str
```

- *Type:* str

---

##### `use_jira_action`<sup>Required</sup> <a name="use_jira_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useJiraAction"></a>

```python
use_jira_action: str
```

- *Type:* str

---

##### `use_linear_action`<sup>Required</sup> <a name="use_linear_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useLinearAction"></a>

```python
use_linear_action: str
```

- *Type:* str

---

##### `use_mcp_action`<sup>Required</sup> <a name="use_mcp_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMcpAction"></a>

```python
use_mcp_action: str
```

- *Type:* str

---

##### `use_monday_action`<sup>Required</sup> <a name="use_monday_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMondayAction"></a>

```python
use_monday_action: str
```

- *Type:* str

---

##### `use_ms_exchange_action`<sup>Required</sup> <a name="use_ms_exchange_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsExchangeAction"></a>

```python
use_ms_exchange_action: str
```

- *Type:* str

---

##### `use_ms_teams_action`<sup>Required</sup> <a name="use_ms_teams_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useMsTeamsAction"></a>

```python
use_ms_teams_action: str
```

- *Type:* str

---

##### `use_new_relic_action`<sup>Required</sup> <a name="use_new_relic_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNewRelicAction"></a>

```python
use_new_relic_action: str
```

- *Type:* str

---

##### `use_notion_action`<sup>Required</sup> <a name="use_notion_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useNotionAction"></a>

```python
use_notion_action: str
```

- *Type:* str

---

##### `use_one_drive_action`<sup>Required</sup> <a name="use_one_drive_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveAction"></a>

```python
use_one_drive_action: str
```

- *Type:* str

---

##### `use_one_drive_knowledge_base`<sup>Required</sup> <a name="use_one_drive_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOneDriveKnowledgeBase"></a>

```python
use_one_drive_knowledge_base: str
```

- *Type:* str

---

##### `use_open_api_action`<sup>Required</sup> <a name="use_open_api_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOpenApiAction"></a>

```python
use_open_api_action: str
```

- *Type:* str

---

##### `use_outlook_add_in_extension`<sup>Required</sup> <a name="use_outlook_add_in_extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useOutlookAddInExtension"></a>

```python
use_outlook_add_in_extension: str
```

- *Type:* str

---

##### `use_pager_duty_action`<sup>Required</sup> <a name="use_pager_duty_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePagerDutyAction"></a>

```python
use_pager_duty_action: str
```

- *Type:* str

---

##### `use_powerpoint_add_in_extension`<sup>Required</sup> <a name="use_powerpoint_add_in_extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.usePowerpointAddInExtension"></a>

```python
use_powerpoint_add_in_extension: str
```

- *Type:* str

---

##### `use_q_business_knowledge_base`<sup>Required</sup> <a name="use_q_business_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useQBusinessKnowledgeBase"></a>

```python
use_q_business_knowledge_base: str
```

- *Type:* str

---

##### `use_s3_knowledge_base`<sup>Required</sup> <a name="use_s3_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useS3KnowledgeBase"></a>

```python
use_s3_knowledge_base: str
```

- *Type:* str

---

##### `use_salesforce_action`<sup>Required</sup> <a name="use_salesforce_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSalesforceAction"></a>

```python
use_salesforce_action: str
```

- *Type:* str

---

##### `use_sand_p_global_energy_action`<sup>Required</sup> <a name="use_sand_p_global_energy_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPGlobalEnergyAction"></a>

```python
use_sand_p_global_energy_action: str
```

- *Type:* str

---

##### `use_sand_pgmi_action`<sup>Required</sup> <a name="use_sand_pgmi_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSandPgmiAction"></a>

```python
use_sand_pgmi_action: str
```

- *Type:* str

---

##### `use_sap_bill_of_material_action`<sup>Required</sup> <a name="use_sap_bill_of_material_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBillOfMaterialAction"></a>

```python
use_sap_bill_of_material_action: str
```

- *Type:* str

---

##### `use_sap_business_partner_action`<sup>Required</sup> <a name="use_sap_business_partner_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapBusinessPartnerAction"></a>

```python
use_sap_business_partner_action: str
```

- *Type:* str

---

##### `use_sap_material_stock_action`<sup>Required</sup> <a name="use_sap_material_stock_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapMaterialStockAction"></a>

```python
use_sap_material_stock_action: str
```

- *Type:* str

---

##### `use_sap_physical_inventory_action`<sup>Required</sup> <a name="use_sap_physical_inventory_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapPhysicalInventoryAction"></a>

```python
use_sap_physical_inventory_action: str
```

- *Type:* str

---

##### `use_sap_product_master_data_action`<sup>Required</sup> <a name="use_sap_product_master_data_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSapProductMasterDataAction"></a>

```python
use_sap_product_master_data_action: str
```

- *Type:* str

---

##### `use_service_now_action`<sup>Required</sup> <a name="use_service_now_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useServiceNowAction"></a>

```python
use_service_now_action: str
```

- *Type:* str

---

##### `use_share_point_action`<sup>Required</sup> <a name="use_share_point_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointAction"></a>

```python
use_share_point_action: str
```

- *Type:* str

---

##### `use_share_point_knowledge_base`<sup>Required</sup> <a name="use_share_point_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSharePointKnowledgeBase"></a>

```python
use_share_point_knowledge_base: str
```

- *Type:* str

---

##### `use_slack_action`<sup>Required</sup> <a name="use_slack_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSlackAction"></a>

```python
use_slack_action: str
```

- *Type:* str

---

##### `use_smartsheet_action`<sup>Required</sup> <a name="use_smartsheet_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useSmartsheetAction"></a>

```python
use_smartsheet_action: str
```

- *Type:* str

---

##### `use_textract_action`<sup>Required</sup> <a name="use_textract_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useTextractAction"></a>

```python
use_textract_action: str
```

- *Type:* str

---

##### `use_web_crawler_knowledge_base`<sup>Required</sup> <a name="use_web_crawler_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWebCrawlerKnowledgeBase"></a>

```python
use_web_crawler_knowledge_base: str
```

- *Type:* str

---

##### `use_word_add_in_extension`<sup>Required</sup> <a name="use_word_add_in_extension" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useWordAddInExtension"></a>

```python
use_word_add_in_extension: str
```

- *Type:* str

---

##### `use_zendesk_action`<sup>Required</sup> <a name="use_zendesk_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.useZendeskAction"></a>

```python
use_zendesk_action: str
```

- *Type:* str

---

##### `view_account_spice_capacity`<sup>Required</sup> <a name="view_account_spice_capacity" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.viewAccountSpiceCapacity"></a>

```python
view_account_spice_capacity: str
```

- *Type:* str

---

##### `web_crawler_knowledge_base`<sup>Required</sup> <a name="web_crawler_knowledge_base" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.webCrawlerKnowledgeBase"></a>

```python
web_crawler_knowledge_base: str
```

- *Type:* str

---

##### `zendesk_action`<sup>Required</sup> <a name="zendesk_action" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.zendeskAction"></a>

```python
zendesk_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightCustomPermissionsCapabilities
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsCapabilities">DataAwsccQuicksightCustomPermissionsCapabilities</a>

---


### DataAwsccQuicksightCustomPermissionsTagsList <a name="DataAwsccQuicksightCustomPermissionsTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccQuicksightCustomPermissionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccQuicksightCustomPermissionsTagsOutputReference <a name="DataAwsccQuicksightCustomPermissionsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_quicksight_custom_permissions

dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccQuicksightCustomPermissionsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightCustomPermissions.DataAwsccQuicksightCustomPermissionsTags">DataAwsccQuicksightCustomPermissionsTags</a>

---



