# `dataAwsccConfigDeliveryChannel` Submodule <a name="`dataAwsccConfigDeliveryChannel` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigDeliveryChannel <a name="DataAwsccConfigDeliveryChannel" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/config_delivery_channel awscc_config_delivery_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/config_delivery_channel#id DataAwsccConfigDeliveryChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccConfigDeliveryChannel resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccConfigDeliveryChannel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccConfigDeliveryChannel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccConfigDeliveryChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/config_delivery_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigDeliveryChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.configSnapshotDeliveryProperties">config_snapshot_delivery_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KmsKeyArn">s3_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `config_snapshot_delivery_properties`<sup>Required</sup> <a name="config_snapshot_delivery_properties" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.configSnapshotDeliveryProperties"></a>

```python
config_snapshot_delivery_properties: DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `s3_kms_key_arn`<sup>Required</sup> <a name="s3_kms_key_arn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.s3KmsKeyArn"></a>

```python
s3_kms_key_arn: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigDeliveryChannelConfig <a name="DataAwsccConfigDeliveryChannelConfig" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/config_delivery_channel#id DataAwsccConfigDeliveryChannel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties <a name="DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference <a name="DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_config_delivery_channel

dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency">delivery_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_frequency`<sup>Required</sup> <a name="delivery_frequency" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.deliveryFrequency"></a>

```python
delivery_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigDeliveryChannel.DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties">DataAwsccConfigDeliveryChannelConfigSnapshotDeliveryProperties</a>

---



