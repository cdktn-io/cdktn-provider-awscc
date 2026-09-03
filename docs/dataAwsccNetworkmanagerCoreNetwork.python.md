# `dataAwsccNetworkmanagerCoreNetwork` Submodule <a name="`dataAwsccNetworkmanagerCoreNetwork` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerCoreNetwork <a name="DataAwsccNetworkmanagerCoreNetwork" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/networkmanager_core_network awscc_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/networkmanager_core_network#id DataAwsccNetworkmanagerCoreNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworkmanagerCoreNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworkmanagerCoreNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/networkmanager_core_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerCoreNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList">DataAwsccNetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.networkFunctionGroups">network_function_groups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList">DataAwsccNetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList">DataAwsccNetworkmanagerCoreNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.edges"></a>

```python
edges: DataAwsccNetworkmanagerCoreNetworkEdgesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList">DataAwsccNetworkmanagerCoreNetworkEdgesList</a>

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `network_function_groups`<sup>Required</sup> <a name="network_function_groups" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.networkFunctionGroups"></a>

```python
network_function_groups: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a>

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.segments"></a>

```python
segments: DataAwsccNetworkmanagerCoreNetworkSegmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList">DataAwsccNetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tags"></a>

```python
tags: DataAwsccNetworkmanagerCoreNetworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList">DataAwsccNetworkmanagerCoreNetworkTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerCoreNetworkConfig <a name="DataAwsccNetworkmanagerCoreNetworkConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/networkmanager_core_network#id DataAwsccNetworkmanagerCoreNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerCoreNetworkEdges <a name="DataAwsccNetworkmanagerCoreNetworkEdges" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges()
```


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups()
```


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments()
```


### DataAwsccNetworkmanagerCoreNetworkSegments <a name="DataAwsccNetworkmanagerCoreNetworkSegments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments()
```


### DataAwsccNetworkmanagerCoreNetworkTags <a name="DataAwsccNetworkmanagerCoreNetworkTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerCoreNetworkEdgesList <a name="DataAwsccNetworkmanagerCoreNetworkEdgesList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">inside_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges">DataAwsccNetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `inside_cidr_blocks`<sup>Required</sup> <a name="inside_cidr_blocks" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```python
inside_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerCoreNetworkEdges
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges">DataAwsccNetworkmanagerCoreNetworkEdges</a>

---


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations">edge_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_locations`<sup>Required</sup> <a name="edge_locations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations"></a>

```python
edge_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments"></a>

```python
segments: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups</a>

---


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo">send_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia">send_via</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `send_to`<sup>Required</sup> <a name="send_to" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo"></a>

```python
send_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `send_via`<sup>Required</sup> <a name="send_via" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia"></a>

```python
send_via: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a>

---


### DataAwsccNetworkmanagerCoreNetworkSegmentsList <a name="DataAwsccNetworkmanagerCoreNetworkSegmentsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edge_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">shared_segments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments">DataAwsccNetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_locations`<sup>Required</sup> <a name="edge_locations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```python
edge_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shared_segments`<sup>Required</sup> <a name="shared_segments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```python
shared_segments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerCoreNetworkSegments
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments">DataAwsccNetworkmanagerCoreNetworkSegments</a>

---


### DataAwsccNetworkmanagerCoreNetworkTagsList <a name="DataAwsccNetworkmanagerCoreNetworkTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerCoreNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerCoreNetworkTagsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_core_network

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags">DataAwsccNetworkmanagerCoreNetworkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerCoreNetworkTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags">DataAwsccNetworkmanagerCoreNetworkTags</a>

---



