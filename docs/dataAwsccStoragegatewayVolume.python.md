# `dataAwsccStoragegatewayVolume` Submodule <a name="`dataAwsccStoragegatewayVolume` Submodule" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStoragegatewayVolume <a name="DataAwsccStoragegatewayVolume" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#id DataAwsccStoragegatewayVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccStoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccStoragegatewayVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccStoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn">gateway_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted">kms_encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn">source_volume_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName">target_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn">volume_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus">volume_attachment_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes">volume_size_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus">volume_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes">volume_used_in_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `gateway_arn`<sup>Required</sup> <a name="gateway_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.gatewayArn"></a>

```python
gateway_arn: str
```

- *Type:* str

---

##### `kms_encrypted`<sup>Required</sup> <a name="kms_encrypted" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsEncrypted"></a>

```python
kms_encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `source_volume_arn`<sup>Required</sup> <a name="source_volume_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.sourceVolumeArn"></a>

```python
source_volume_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tags"></a>

```python
tags: DataAwsccStoragegatewayVolumeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList">DataAwsccStoragegatewayVolumeTagsList</a>

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `target_name`<sup>Required</sup> <a name="target_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.targetName"></a>

```python
target_name: str
```

- *Type:* str

---

##### `volume_arn`<sup>Required</sup> <a name="volume_arn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeArn"></a>

```python
volume_arn: str
```

- *Type:* str

---

##### `volume_attachment_status`<sup>Required</sup> <a name="volume_attachment_status" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeAttachmentStatus"></a>

```python
volume_attachment_status: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `volume_size_in_bytes`<sup>Required</sup> <a name="volume_size_in_bytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeSizeInBytes"></a>

```python
volume_size_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_status`<sup>Required</sup> <a name="volume_status" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeStatus"></a>

```python
volume_status: str
```

- *Type:* str

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `volume_used_in_bytes`<sup>Required</sup> <a name="volume_used_in_bytes" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.volumeUsedInBytes"></a>

```python
volume_used_in_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStoragegatewayVolumeConfig <a name="DataAwsccStoragegatewayVolumeConfig" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/storagegateway_volume#id DataAwsccStoragegatewayVolume#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStoragegatewayVolumeTags <a name="DataAwsccStoragegatewayVolumeTags" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStoragegatewayVolumeTagsList <a name="DataAwsccStoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccStoragegatewayVolumeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccStoragegatewayVolumeTagsOutputReference <a name="DataAwsccStoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_storagegateway_volume

dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccStoragegatewayVolumeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStoragegatewayVolume.DataAwsccStoragegatewayVolumeTags">DataAwsccStoragegatewayVolumeTags</a>

---



