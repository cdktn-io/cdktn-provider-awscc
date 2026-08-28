# `dataAwsccMediaconnectBridgeSource` Submodule <a name="`dataAwsccMediaconnectBridgeSource` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectBridgeSource <a name="DataAwsccMediaconnectBridgeSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_bridge_source awscc_mediaconnect_bridge_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_bridge_source#id DataAwsccMediaconnectBridgeSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectBridgeSource resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectBridgeSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectBridgeSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectBridgeSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_bridge_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectBridgeSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.flowSource">flow_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.networkSource">network_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

---

##### `flow_source`<sup>Required</sup> <a name="flow_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.flowSource"></a>

```python
flow_source: DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_source`<sup>Required</sup> <a name="network_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.networkSource"></a>

```python
network_source: DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectBridgeSourceConfig <a name="DataAwsccMediaconnectBridgeSourceConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/mediaconnect_bridge_source#id DataAwsccMediaconnectBridgeSource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectBridgeSourceFlowSource <a name="DataAwsccMediaconnectBridgeSourceFlowSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource()
```


### DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment <a name="DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment()
```


### DataAwsccMediaconnectBridgeSourceNetworkSource <a name="DataAwsccMediaconnectBridgeSourceNetworkSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource()
```


### DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings <a name="DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachment</a>

---


### DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference <a name="DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment">flow_vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource">DataAwsccMediaconnectBridgeSourceFlowSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `flow_vpc_interface_attachment`<sup>Required</sup> <a name="flow_vpc_interface_attachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```python
flow_vpc_interface_attachment: DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectBridgeSourceFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourceFlowSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceFlowSource">DataAwsccMediaconnectBridgeSourceFlowSource</a>

---


### DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference <a name="DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">multicast_source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multicast_source_ip`<sup>Required</sup> <a name="multicast_source_ip" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```python
multicast_source_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettings</a>

---


### DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference <a name="DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_source

dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp">multicast_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings">multicast_source_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource">DataAwsccMediaconnectBridgeSourceNetworkSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multicast_ip`<sup>Required</sup> <a name="multicast_ip" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastIp"></a>

```python
multicast_ip: str
```

- *Type:* str

---

##### `multicast_source_settings`<sup>Required</sup> <a name="multicast_source_settings" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```python
multicast_source_settings: DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference">DataAwsccMediaconnectBridgeSourceNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourceNetworkSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeSource.DataAwsccMediaconnectBridgeSourceNetworkSource">DataAwsccMediaconnectBridgeSourceNetworkSource</a>

---



