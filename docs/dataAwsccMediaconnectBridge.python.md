# `dataAwsccMediaconnectBridge` Submodule <a name="`dataAwsccMediaconnectBridge` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectBridge <a name="DataAwsccMediaconnectBridge" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_bridge awscc_mediaconnect_bridge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_bridge#id DataAwsccMediaconnectBridge#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectBridge resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccMediaconnectBridge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccMediaconnectBridge to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccMediaconnectBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.bridgeState">bridge_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.egressGatewayBridge">egress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference">DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.ingressGatewayBridge">ingress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference">DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList">DataAwsccMediaconnectBridgeOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.placementArn">placement_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.sourceFailoverConfig">source_failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference">DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList">DataAwsccMediaconnectBridgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

---

##### `bridge_state`<sup>Required</sup> <a name="bridge_state" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.bridgeState"></a>

```python
bridge_state: str
```

- *Type:* str

---

##### `egress_gateway_bridge`<sup>Required</sup> <a name="egress_gateway_bridge" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.egressGatewayBridge"></a>

```python
egress_gateway_bridge: DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference">DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference</a>

---

##### `ingress_gateway_bridge`<sup>Required</sup> <a name="ingress_gateway_bridge" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.ingressGatewayBridge"></a>

```python
ingress_gateway_bridge: DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference">DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.outputs"></a>

```python
outputs: DataAwsccMediaconnectBridgeOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList">DataAwsccMediaconnectBridgeOutputsList</a>

---

##### `placement_arn`<sup>Required</sup> <a name="placement_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.placementArn"></a>

```python
placement_arn: str
```

- *Type:* str

---

##### `source_failover_config`<sup>Required</sup> <a name="source_failover_config" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.sourceFailoverConfig"></a>

```python
source_failover_config: DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference">DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.sources"></a>

```python
sources: DataAwsccMediaconnectBridgeSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList">DataAwsccMediaconnectBridgeSourcesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridge.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectBridgeConfig <a name="DataAwsccMediaconnectBridgeConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/mediaconnect_bridge#id DataAwsccMediaconnectBridge#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectBridgeEgressGatewayBridge <a name="DataAwsccMediaconnectBridgeEgressGatewayBridge" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridge()
```


### DataAwsccMediaconnectBridgeIngressGatewayBridge <a name="DataAwsccMediaconnectBridgeIngressGatewayBridge" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridge.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridge()
```


### DataAwsccMediaconnectBridgeOutputs <a name="DataAwsccMediaconnectBridgeOutputs" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputs()
```


### DataAwsccMediaconnectBridgeOutputsNetworkOutput <a name="DataAwsccMediaconnectBridgeOutputsNetworkOutput" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutput.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutput()
```


### DataAwsccMediaconnectBridgeSourceFailoverConfig <a name="DataAwsccMediaconnectBridgeSourceFailoverConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfig()
```


### DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority <a name="DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority()
```


### DataAwsccMediaconnectBridgeSources <a name="DataAwsccMediaconnectBridgeSources" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSources()
```


### DataAwsccMediaconnectBridgeSourcesFlowSource <a name="DataAwsccMediaconnectBridgeSourcesFlowSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSource()
```


### DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment <a name="DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment()
```


### DataAwsccMediaconnectBridgeSourcesNetworkSource <a name="DataAwsccMediaconnectBridgeSourcesNetworkSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSource()
```


### DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings <a name="DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference <a name="DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridge">DataAwsccMediaconnectBridgeEgressGatewayBridge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_bitrate`<sup>Required</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeEgressGatewayBridge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeEgressGatewayBridge">DataAwsccMediaconnectBridgeEgressGatewayBridge</a>

---


### DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference <a name="DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs">max_outputs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridge">DataAwsccMediaconnectBridgeIngressGatewayBridge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_bitrate`<sup>Required</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_outputs`<sup>Required</sup> <a name="max_outputs" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs"></a>

```python
max_outputs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeIngressGatewayBridge
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeIngressGatewayBridge">DataAwsccMediaconnectBridgeIngressGatewayBridge</a>

---


### DataAwsccMediaconnectBridgeOutputsList <a name="DataAwsccMediaconnectBridgeOutputsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectBridgeOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference <a name="DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutput">DataAwsccMediaconnectBridgeOutputsNetworkOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeOutputsNetworkOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutput">DataAwsccMediaconnectBridgeOutputsNetworkOutput</a>

---


### DataAwsccMediaconnectBridgeOutputsOutputReference <a name="DataAwsccMediaconnectBridgeOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.networkOutput">network_output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference">DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputs">DataAwsccMediaconnectBridgeOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_output`<sup>Required</sup> <a name="network_output" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.networkOutput"></a>

```python
network_output: DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference">DataAwsccMediaconnectBridgeOutputsNetworkOutputOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeOutputs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeOutputs">DataAwsccMediaconnectBridgeOutputs</a>

---


### DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference <a name="DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode">failover_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority">source_priority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfig">DataAwsccMediaconnectBridgeSourceFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_mode`<sup>Required</sup> <a name="failover_mode" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

---

##### `source_priority`<sup>Required</sup> <a name="source_priority" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```python
source_priority: DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourceFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfig">DataAwsccMediaconnectBridgeSourceFailoverConfig</a>

---


### DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference <a name="DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">primary_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority">DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_source`<sup>Required</sup> <a name="primary_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```python
primary_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority">DataAwsccMediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---


### DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---


### DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference <a name="DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment">flow_vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSource">DataAwsccMediaconnectBridgeSourcesFlowSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `flow_vpc_interface_attachment`<sup>Required</sup> <a name="flow_vpc_interface_attachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```python
flow_vpc_interface_attachment: DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourcesFlowSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSource">DataAwsccMediaconnectBridgeSourcesFlowSource</a>

---


### DataAwsccMediaconnectBridgeSourcesList <a name="DataAwsccMediaconnectBridgeSourcesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccMediaconnectBridgeSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference <a name="DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">multicast_source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multicast_source_ip`<sup>Required</sup> <a name="multicast_source_ip" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```python
multicast_source_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---


### DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference <a name="DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp">multicast_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings">multicast_source_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSource">DataAwsccMediaconnectBridgeSourcesNetworkSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multicast_ip`<sup>Required</sup> <a name="multicast_ip" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp"></a>

```python
multicast_ip: str
```

- *Type:* str

---

##### `multicast_source_settings`<sup>Required</sup> <a name="multicast_source_settings" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```python
multicast_source_settings: DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">DataAwsccMediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSourcesNetworkSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSource">DataAwsccMediaconnectBridgeSourcesNetworkSource</a>

---


### DataAwsccMediaconnectBridgeSourcesOutputReference <a name="DataAwsccMediaconnectBridgeSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_mediaconnect_bridge

dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.flowSource">flow_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference">DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.networkSource">network_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference">DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSources">DataAwsccMediaconnectBridgeSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_source`<sup>Required</sup> <a name="flow_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.flowSource"></a>

```python
flow_source: DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference">DataAwsccMediaconnectBridgeSourcesFlowSourceOutputReference</a>

---

##### `network_source`<sup>Required</sup> <a name="network_source" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.networkSource"></a>

```python
network_source: DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference">DataAwsccMediaconnectBridgeSourcesNetworkSourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccMediaconnectBridgeSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectBridge.DataAwsccMediaconnectBridgeSources">DataAwsccMediaconnectBridgeSources</a>

---



