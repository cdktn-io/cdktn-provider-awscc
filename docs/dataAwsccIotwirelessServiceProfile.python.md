# `dataAwsccIotwirelessServiceProfile` Submodule <a name="`dataAwsccIotwirelessServiceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessServiceProfile <a name="DataAwsccIotwirelessServiceProfile" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotwireless_service_profile awscc_iotwireless_service_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotwireless_service_profile#id DataAwsccIotwirelessServiceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessServiceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotwirelessServiceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotwirelessServiceProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotwirelessServiceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotwireless_service_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessServiceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.loRaWan">lo_ra_wan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference">DataAwsccIotwirelessServiceProfileLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.serviceProfileId">service_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList">DataAwsccIotwirelessServiceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `lo_ra_wan`<sup>Required</sup> <a name="lo_ra_wan" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.loRaWan"></a>

```python
lo_ra_wan: DataAwsccIotwirelessServiceProfileLoRaWanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference">DataAwsccIotwirelessServiceProfileLoRaWanOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_profile_id`<sup>Required</sup> <a name="service_profile_id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.serviceProfileId"></a>

```python
service_profile_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tags"></a>

```python
tags: DataAwsccIotwirelessServiceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList">DataAwsccIotwirelessServiceProfileTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessServiceProfileConfig <a name="DataAwsccIotwirelessServiceProfileConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/iotwireless_service_profile#id DataAwsccIotwirelessServiceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessServiceProfileLoRaWan <a name="DataAwsccIotwirelessServiceProfileLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan()
```


### DataAwsccIotwirelessServiceProfileTags <a name="DataAwsccIotwirelessServiceProfileTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessServiceProfileLoRaWanOutputReference <a name="DataAwsccIotwirelessServiceProfileLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata">add_gw_metadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.channelMask">channel_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq">dev_status_req_freq</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize">dl_bucket_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRate">dl_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy">dl_rate_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMax">dr_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMin">dr_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed">hr_allowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity">min_gw_diversity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc">nwk_geo_loc</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed">pr_allowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed">ra_allowed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery">report_dev_status_battery</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin">report_dev_status_margin</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.targetPer">target_per</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize">ul_bucket_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRate">ul_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy">ul_rate_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan">DataAwsccIotwirelessServiceProfileLoRaWan</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_gw_metadata`<sup>Required</sup> <a name="add_gw_metadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.addGwMetadata"></a>

```python
add_gw_metadata: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `channel_mask`<sup>Required</sup> <a name="channel_mask" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.channelMask"></a>

```python
channel_mask: str
```

- *Type:* str

---

##### `dev_status_req_freq`<sup>Required</sup> <a name="dev_status_req_freq" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.devStatusReqFreq"></a>

```python
dev_status_req_freq: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dl_bucket_size`<sup>Required</sup> <a name="dl_bucket_size" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlBucketSize"></a>

```python
dl_bucket_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dl_rate`<sup>Required</sup> <a name="dl_rate" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRate"></a>

```python
dl_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dl_rate_policy`<sup>Required</sup> <a name="dl_rate_policy" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.dlRatePolicy"></a>

```python
dl_rate_policy: str
```

- *Type:* str

---

##### `dr_max`<sup>Required</sup> <a name="dr_max" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMax"></a>

```python
dr_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dr_min`<sup>Required</sup> <a name="dr_min" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.drMin"></a>

```python
dr_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hr_allowed`<sup>Required</sup> <a name="hr_allowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.hrAllowed"></a>

```python
hr_allowed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `min_gw_diversity`<sup>Required</sup> <a name="min_gw_diversity" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.minGwDiversity"></a>

```python
min_gw_diversity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nwk_geo_loc`<sup>Required</sup> <a name="nwk_geo_loc" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.nwkGeoLoc"></a>

```python
nwk_geo_loc: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `pr_allowed`<sup>Required</sup> <a name="pr_allowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.prAllowed"></a>

```python
pr_allowed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ra_allowed`<sup>Required</sup> <a name="ra_allowed" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.raAllowed"></a>

```python
ra_allowed: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `report_dev_status_battery`<sup>Required</sup> <a name="report_dev_status_battery" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusBattery"></a>

```python
report_dev_status_battery: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `report_dev_status_margin`<sup>Required</sup> <a name="report_dev_status_margin" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.reportDevStatusMargin"></a>

```python
report_dev_status_margin: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `target_per`<sup>Required</sup> <a name="target_per" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.targetPer"></a>

```python
target_per: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ul_bucket_size`<sup>Required</sup> <a name="ul_bucket_size" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulBucketSize"></a>

```python
ul_bucket_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ul_rate`<sup>Required</sup> <a name="ul_rate" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRate"></a>

```python
ul_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ul_rate_policy`<sup>Required</sup> <a name="ul_rate_policy" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.ulRatePolicy"></a>

```python
ul_rate_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWanOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessServiceProfileLoRaWan
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileLoRaWan">DataAwsccIotwirelessServiceProfileLoRaWan</a>

---


### DataAwsccIotwirelessServiceProfileTagsList <a name="DataAwsccIotwirelessServiceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotwirelessServiceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotwirelessServiceProfileTagsOutputReference <a name="DataAwsccIotwirelessServiceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotwireless_service_profile

dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags">DataAwsccIotwirelessServiceProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotwirelessServiceProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessServiceProfile.DataAwsccIotwirelessServiceProfileTags">DataAwsccIotwirelessServiceProfileTags</a>

---



