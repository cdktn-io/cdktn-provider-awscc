# `dataAwsccConnectInstanceStorageConfig` Submodule <a name="`dataAwsccConnectInstanceStorageConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectInstanceStorageConfig <a name="DataAwsccConnectInstanceStorageConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_instance_storage_config awscc_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_instance_storage_config#id DataAwsccConnectInstanceStorageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConnectInstanceStorageConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConnectInstanceStorageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectInstanceStorageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisFirehoseConfig">kinesis_firehose_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisStreamConfig">kinesis_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisVideoStreamConfig">kinesis_video_stream_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.s3Config">s3_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `kinesis_firehose_config`<sup>Required</sup> <a name="kinesis_firehose_config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

```python
kinesis_firehose_config: DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `kinesis_stream_config`<sup>Required</sup> <a name="kinesis_stream_config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

```python
kinesis_stream_config: DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `kinesis_video_stream_config`<sup>Required</sup> <a name="kinesis_video_stream_config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

```python
kinesis_video_stream_config: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `s3_config`<sup>Required</sup> <a name="s3_config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.s3Config"></a>

```python
s3_config: DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference</a>

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectInstanceStorageConfigConfig <a name="DataAwsccConnectInstanceStorageConfigConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/connect_instance_storage_config#id DataAwsccConnectInstanceStorageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig()
```


### DataAwsccConnectInstanceStorageConfigKinesisStreamConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig()
```


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig()
```


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig()
```


### DataAwsccConnectInstanceStorageConfigS3Config <a name="DataAwsccConnectInstanceStorageConfigS3Config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config()
```


### DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig <a name="DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">firehose_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `firehose_arn`<sup>Required</sup> <a name="firehose_arn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```python
firehose_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig">DataAwsccConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisStreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectInstanceStorageConfigKinesisStreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisStreamConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---


### DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">retention_period_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `retention_period_hours`<sup>Required</sup> <a name="retention_period_hours" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```python
retention_period_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig">DataAwsccConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---


### DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---


### DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference <a name="DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_connect_instance_storage_config

dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig">encryption_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config">DataAwsccConnectInstanceStorageConfigS3Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `encryption_config`<sup>Required</sup> <a name="encryption_config" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```python
encryption_config: DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">DataAwsccConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConnectInstanceStorageConfigS3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectInstanceStorageConfig.DataAwsccConnectInstanceStorageConfigS3Config">DataAwsccConnectInstanceStorageConfigS3Config</a>

---



