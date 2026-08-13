# `dataAwsccMediaconnectBridgeOutput` Submodule <a name="`dataAwsccMediaconnectBridgeOutput` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectBridgeOutput <a name="DataAwsccMediaconnectBridgeOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_bridge_output awscc_mediaconnect_bridge_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_bridge_output#id DataAwsccMediaconnectBridgeOutput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectBridgeOutput resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectBridgeOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectBridgeOutput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectBridgeOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_bridge_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectBridgeOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.networkOutput">network_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference">DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_output`<sup>Required</sup> <a name="network_output" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.networkOutput"></a>

```python
network_output: DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference">DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectBridgeOutputConfig <a name="DataAwsccMediaconnectBridgeOutputConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mediaconnect_bridge_output#id DataAwsccMediaconnectBridgeOutput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectBridgeOutputNetworkOutput <a name="DataAwsccMediaconnectBridgeOutputNetworkOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference <a name="DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge_output

dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutput">DataAwsccMediaconnectBridgeOutputNetworkOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeOutputNetworkOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridgeOutput.DataAwsccMediaconnectBridgeOutputNetworkOutput">DataAwsccMediaconnectBridgeOutputNetworkOutput</a>

---



